import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col, Image } from 'react-bootstrap';
import { getSGV, updateProfile } from '../../services/apiCalls';
import * as yup from 'yup';
import { Formik, useFormikContext } from 'formik';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AvatarOptionStyles, AvatarSelectorStyles, AvatarTitleLayoutStyles } from '../RegisterForm/RegisterForm.styles';
import { styled } from '@stitches/react';
import { BsArrowRepeat } from 'react-icons/bs';



const schema = yup.object().shape({
    firstName: yup.string().min(2, 'Too short!').max(14, 'Too long!'),
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

const ModifyProfileModal = ({ currentUser }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { resetForm } = useFormikContext();

    const [avatarSeeds, setAvatarSeeds] = useState(Array.from({ length: 4 }, () => (Math.random() + 1).toString(36).substring(7)));

    const handleRegenerateAvatar = () => {
        setAvatarSeeds(Array.from({ length: 4 }, () => (Math.random() + 1).toString(36).substring(7)));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const updatedUser = await updateProfile({
                username: event.username,
                fullName: `${event.firstName} ${event.surname}`,
                email: event.email,
                avatarSeed: event.avatarSeed,
                newPassword: event.newPassword
            });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Edit profile
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='modal-lg'

            >
                <Modal.Header closeButton>
                    <Modal.Title>Modify Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        validationSchema={schema}
                        onSubmit={submitHandler}
                        onChange={console.log}
                        initialValues={{
                            username: currentUser.username,
                            email: currentUser.email,
                            oldPassword: currentUser.password,
                            firstName: currentUser.fullName.split(' ')[0],
                            surname: currentUser.fullName.split(' ')[1],
                            newPassword: '',
                            confirmPassword: '',
                            avatarSeed: avatarSeeds[0]
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
                                        label="Old password"
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
                                <Form.Group controlId='validationPassword'>
                                    <FloatingLabel
                                        controlId="floatingInput5"
                                        label="New password"
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
                                <AvatarTitleLayout>
                                    <h3>Avatar</h3>
                                    <Button variant="outline-dark" onClick={handleRegenerateAvatar} className='rounded-circle' style={{ margin: '1em 1em 1em 1em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <BsArrowRepeat />
                                    </Button>
                                </AvatarTitleLayout>
                                <Form.Group controlId='validationAvatar'>
                                    <AvatarRadioContainer>
                                        {
                                            avatarSeeds.map((seed, index) => {
                                                return (
                                                    <AvatarOptionContainer key={index.toString()} className={seed.toString() === values.avatarSeed ? 'selected' : ''} style={{ borderRadius: '0.5em' }}>
                                                        <Form.Check
                                                            id={index.toString()}
                                                            defaultChecked={index === 0}
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
                                    Save changes
                                </Button>

                                <Button variant="secondary" onClick={resetForm}>
                                    Reset values
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModifyProfileModal;


const AvatarRadioContainer = styled('div', AvatarSelectorStyles);
const AvatarOptionContainer = styled('div', AvatarOptionStyles);
const AvatarTitleLayout = styled('div', AvatarTitleLayoutStyles);