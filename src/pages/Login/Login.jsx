import { styled } from "@stitches/react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginStyles } from "./Login.styles";

const Login = () => {
    return (
        <LoginLayout>
            <LoginForm/>
        </LoginLayout>
    )
}

export default Login;
const LoginLayout = styled('div',LoginStyles)