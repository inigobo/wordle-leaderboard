import { styled } from "@stitches/react";
import Button from 'react-bootstrap/Button';
import { ButtonStyles } from "./Button.styles";

const HeaderButton = (props) => {
    return (
        <ButtonLayout variant='warning'>
            {props.text}
        </ButtonLayout>
    )
}

export default HeaderButton;

const ButtonLayout = styled(Button, ButtonStyles);