import { CardLayoutStyles } from "./LetterCard.styles";
import { styled } from "@stitches/react";

const LetterCard = ({paint, letter}) => {
    return (
        <LetterCardLayout paint={paint}>
            {letter}
        </LetterCardLayout>

    );

}

export default LetterCard;

const LetterCardLayout = styled('div', CardLayoutStyles);