import { Card, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { LoginFormStyles } from './LoginForm.styles';
import { styled } from '@stitches/react';
import { useGlobalContext } from '../../contexts/GlobalContext';

const LoginForm = () => {
    const [validated, setValidated] = useState(false);
    const { globalContext, setGlobalContext } = useGlobalContext();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        setGlobalContext({ ...globalContext,username:'username', isLoggedIn: true })
    };
    console.log(globalContext);
    return (
        <LoginFormLayout style={LoginFormStyles}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FormGroup>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder='Username'
                            required />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder='Password'
                            required />
                    </FloatingLabel>
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </LoginFormLayout>
    )
}

export default LoginForm;
const LoginFormLayout = styled(Card, LoginFormStyles);