import { styled } from "@stitches/react";
import { RegisterStyles } from "./Register.styles";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
    return ( 
        <RegisterLayout>
            <RegisterForm/>
        </RegisterLayout>
     );
}
 
export default Register;

const RegisterLayout = styled('div', RegisterStyles)