import { styled } from "@stitches/react";
import { NumberStyle, TitleStyle, ContainerStyle } from "./InfoContainer.styles";

const InfoContainer = ({type, score}) => {
    return (
        <ContainerLayout>
            <TitleContainer>
                {type}
            </TitleContainer>
            <NumberContainer>
                {score}
            </NumberContainer>
        </ContainerLayout>
    );
}

export default InfoContainer;

const NumberContainer = styled('div', NumberStyle);
const TitleContainer = styled('div', TitleStyle);
const ContainerLayout = styled('div', ContainerStyle);