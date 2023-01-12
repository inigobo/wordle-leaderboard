import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { LoginFormStyles } from './LoginForm.styles';
import { styled } from '@stitches/react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import RegisterCard from '../RegisterCard/RegisterCard';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';



const schema = yup.object().shape({
    username: yup.string().min(4, 'Too short!').max(12, 'Too long!').required(),
    email: yup.string().email('Invalid email').required('Required'),
});

const LoginForm = () => {
    const navigate = useNavigate();
    const {globalContext, setGlobalContext} = useGlobalContext();
    
    const submitHandler = (event) => {
        console.log('login');
        localStorage.setItem('username', event.username);
        console.log(event);
        setGlobalContext({ ...globalContext, currentUser: event.username, isLoggedIn: true })
        navigate('/');
    };


    return (
        <LoginFormLayout style={LoginFormStyles}>
            <Formik
                validationSchema={schema}
                onSubmit={submitHandler}
                onChange={console.log}
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
            >
                {({
                    handleSubmit={submitHandler},
                    handleChange,
                    handleBlur,
                    touched,
                    errors,
                    values
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId='validation01'>
                            <FloatingLabel
                                controlId="floatingInput1"
                                label="Username"
                                className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    placeholder='Username'
                                    onChange={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    isInvalid={touched.username && errors.username}
                                    required
                                />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput2"
                                label="Email"
                                name="email"
                                className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    isInvalid={touched.email && errors.email}
                                />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput3"
                                label="Password"
                                className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder='Password'
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    isInvalid={touched.password && errors.password}
                                    required />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            <RegisterCard />
        </LoginFormLayout>
    );
}

export default LoginForm;
const LoginFormLayout = styled(Card, LoginFormStyles);