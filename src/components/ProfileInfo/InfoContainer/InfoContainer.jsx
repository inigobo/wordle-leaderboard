import { styled } from "@stitches/react";
import { NumberStyle, TitleStyle, ContainerStyle } from "./InfoContainer.styles";

const InfoContainer = (props) => {
    return (
        <ContainerLayout>
            <TitleContainer>
                {props.type}
            </TitleContainer>
            <NumberContainer>
                {props.score}
            </NumberContainer>
        </ContainerLayout>
    );
}

export default InfoContainer;

const NumberContainer = styled('div', NumberStyle);
const TitleContainer = styled('div', TitleStyle);
const ContainerLayout = styled('div', ContainerStyle);