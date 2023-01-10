import { Card, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { RegisterFormStyles } from './RegisterForm.styles';
import { styled } from '@stitches/react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/GlobalContext';


const schema = yup.object().shape({
    firstName: yup.string().min(2, 'Too short!').max(14, 'Too long!').required(),
    surname: yup.string().min(2, 'Too short!').max(14, 'Too long!').required(),
    username: yup.string().min(4, 'Too short!').max(12, 'Too long!').required(),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Too short!').max(50, 'Too long!').required(),
    confirmPassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
            [yup.ref("password")],
            "Both password need to be the same"
        )
    })
});

const RegisterForm = () => {

    const { globalContext, setGlobalContext } = useGlobalContext();
    let navigate = useNavigate();

    const submitHandler = (event) => {
        console.log('register');
        console.log(event);
        setGlobalContext({ ...globalContext, currentUser: event.username, isLoggedIn: false })
        navigate('/login');
    };

    return (
        <RegisterFormLayout style={RegisterFormStyles}>
            <Formik
                validationSchema={schema}
                onSubmit={submitHandler}
                onChange={console.log}
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    firstName: '',
                    surname: '',
                    confirmPassword: '',
                }}
            >
                {({
                    handleSubmit = { submitHandler },
                    handleChange,
                    handleBlur,
                    errors,
                    touched,
                    values
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group controlId='validationFirstName' as={Col}>
                                <FloatingLabel
                                    controlId="floatingInput1"
                                    label="Name"
                                    className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        placeholder='Name'
                                        onChange={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        isInvalid={touched.firstName && errors.firstName}
                                        required
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId='validationSurname' as={Col}>
                                <FloatingLabel
                                    controlId="floatingInput2"
                                    label="Surname"
                                    name="surname"
                                    className="mb-3">
                                    <Form.Control
                                        type="text"
                                        value={values.surname}
                                        onChange={handleChange('surname')}
                                        onBlur={handleBlur('surname')}
                                        isInvalid={touched.surname && errors.surname}
                                        required
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                    <Form.Control.Feedback type="surname">
                                        {errors.surname}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId='validationUsername' as={Col}>
                                <FloatingLabel
                                    controlId="floatingInput1"
                                    label="Username"
                                    className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        defaultValue={values.username}
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
                            </Form.Group>
                            <Form.Group controlId='validationEmail' as={Col}>
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
                                        required
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Form.Group controlId='validationPassword'>
                            <FloatingLabel
                                controlId="floatingInput3"
                                label="Password"
                                className="mb-3">
                                <Form.Control
                                    type="password"
                                    name='password'
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
                        <Form.Group controlId='validationConfirmPassword'>
                            <FloatingLabel
                                controlId="floatingInput4"
                                label="Confirm password"
                                className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder='Confirm password'
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    isInvalid={touched.confirmPassword && errors.confirmPassword}
                                    required />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </RegisterFormLayout>
    )
}

export default RegisterForm;
const RegisterFormLayout = styled(Card, RegisterFormStyles);