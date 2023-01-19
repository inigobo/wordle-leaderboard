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
import { getUser } from '../../services/apiCalls';



const schema = yup.object().shape({
    username: yup.string().required().test('username-exists', 'Incorrect username', async (value) => {
        const user = await getUser(value);
        console.log('val', user);
        if (user) {
            console.log('true', user);
            return true;
        } else {
            console.log('false', user);
            return false;
        }
    }),
    password: yup.string().when('username', (username, schema) => {
        if(username) {
            return schema.test('password-correct', 'Incorrect password', async value => {
                const user = await getUser(username);
                if (user && user.password === value) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        return schema;
    }),
});

const LoginForm = () => {
    const navigate = useNavigate();
    const { globalContext, setGlobalContext } = useGlobalContext();

    const submitHandler = (event) => {
        console.log('login');
        localStorage.setItem('username', event.username);
        setGlobalContext({ ...globalContext, currentUser: event.username, isLoggedIn: true, avatarSeed: event.avatarSeed })
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
                    password: '',
                }}
                validateOnChange={false}
            >
                {({
                    handleSubmit = { submitHandler },
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
                                    autoComplete='username'
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
                                controlId="floatingInput3"
                                label="Password"
                                className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder='Password'
                                    autoComplete='current-password'
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