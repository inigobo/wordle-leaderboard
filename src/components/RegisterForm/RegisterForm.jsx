import { Card, Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { RegisterFormStyles } from './RegisterForm.styles';
import { styled } from '@stitches/react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { AvatarOptionStyles, AvatarSelectorStyles } from '../AvatarSelector/AvatarSelector.styles';
import { getSGV, registerUser } from '../../services/apiCalls';


const schema = yup.object().shape({
    firstName: yup.string().min(2, 'Too short!').max(14, 'Too long!').required('Required'),
    surname: yup.string().min(2, 'Too short!').max(14, 'Too long!').required('Required'),
    username: yup.string().min(4, 'Too short!').max(12, 'Too long!').required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Too short!').max(50, 'Too long!').required('Required'),
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

    // let rn1 = (Math.random() + 1).toString(36).substring(7);
    // let rn2 = (Math.random() + 1).toString(36).substring(7);
    // let rn3 = (Math.random() + 1).toString(36).substring(7);
    // let rn4 = (Math.random() + 1).toString(36).substring(7);

    const seeds = ['rn1', 'rn2', 'rn3', 'rn4'];

    const submitHandler = (event) => {
        console.log('register');
        console.log(event);
        setGlobalContext({ ...globalContext, currentUser: event.username, avatarSeed: event.avatarSeed, isLoggedIn: false })
        registerUser({
            username: event.username,
            fullName: `${event.firstName} ${event.surname}`,
            avatarSeed: event.avatarSeed,
            password: event.password
        })
            .then(response => {
                console.log(response);
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            });
        
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
                    avatarSeed: 'random'
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
                            <h3>Your profile</h3>
                            <Form.Group controlId='validationFirstName' as={Col}>
                                <FloatingLabel
                                    controlId="floatingInput1"
                                    label="Name"
                                    className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        autoCapitalize='true'
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
                                    className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="surname"
                                        autoCapitalize='true'
                                        value={values.surname}
                                        placeholder='Surname'
                                        onChange={handleChange('surname')}
                                        onBlur={handleBlur('surname')}
                                        isInvalid={touched.surname && errors.surname}
                                        required
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.surname}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId='validationUsername' as={Col}>
                                <FloatingLabel
                                    controlId="floatingInput3"
                                    label="Username"
                                    className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        autoComplete='new-username'
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
                                    controlId="floatingInput4"
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
                        <h3>Password</h3>
                        <Form.Group controlId='validationPassword'>
                            <FloatingLabel
                                controlId="floatingInput5"
                                label="Password"
                                className="mb-3">
                                <Form.Control
                                    type="password"
                                    name='password'
                                    autoComplete='new-password'
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
                                controlId="floatingInput6"
                                label="Confirm password"
                                className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder='Confirm password'
                                    autoComplete='new-password'
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
                        <h3>Avatar</h3>
                        <Form.Group controlId='validationAvatar'>
                            <AvatarRadioContainer>
                                {
                                    seeds.map((seed, index) => {
                                        return (
                                            <AvatarOptionContainer key={index.toString()} className={seed.toString() === values.avatarSeed ? 'selected' : ''}>
                                                <Form.Check
                                                    id={index.toString()}
                                                    css={{
                                                        '&.form-check': {
                                                            height: '0',
                                                            width: '0',
                                                        }
                                                    }}
                                                >
                                                    <Form.Check.Input name="group1"
                                                        type="radio"
                                                        value={seed.toString()}
                                                        onChange={handleChange('avatarSeed')}
                                                        onBlur={handleBlur('avatarSeed')} />
                                                    <Form.Check.Label>
                                                        <Image src={getSGV(seed)} alt={`Option ${index}`} height={80} width={80} />
                                                    </Form.Check.Label>
                                                </Form.Check>
                                            </AvatarOptionContainer>
                                        );
                                    })
                                }
                            </AvatarRadioContainer>
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
const AvatarRadioContainer = styled('div', AvatarSelectorStyles);
const AvatarOptionContainer = styled('div', AvatarOptionStyles);