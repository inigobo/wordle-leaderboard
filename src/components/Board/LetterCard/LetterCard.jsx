import { CardLayoutStyles, AbsentCardStyles, CorrectCardStyles, PresentCardStyles } from "./LetterCard.styles";
import { styled } from "@stitches/react";

const LetterCard = (props) => {
    return (
        <LetterCardLayout>
            {props.letter}
        </LetterCardLayout>

    );

}

export default LetterCard;

const LetterCardLayout = styled('div', CardLayoutStyles);
const AbsentCard = styled('div', AbsentCardStyles);
const CorrectCard = styled('div', CorrectCardStyles);
const PresentCard = styled('div', PresentCardStyles);