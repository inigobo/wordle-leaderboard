import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ButtonStyles } from "./Button.styles";

const HeaderButton = ({redirect, text}) => {
    let navigate = useNavigate();
    return (
        <ButtonLayout variant='warning' onClick={()=>navigate(redirect)} >
            {text}
        </ButtonLayout>
    )
}

export default HeaderButton;

const ButtonLayout = styled(Button, ButtonStyles);