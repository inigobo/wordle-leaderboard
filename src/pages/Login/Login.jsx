import { styled } from "@stitches/react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginStyles } from "./Login.styles";

const Login = () => {
    return (
        <LoginLayout>
            <h1>Login</h1>
            <LoginForm />
        </LoginLayout>
    )
}

export default Login;
const LoginLayout = styled('div', LoginStyles)