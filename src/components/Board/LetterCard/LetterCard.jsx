import { CardLayoutStyles } from "./LetterCard.styles";
import { styled } from "@stitches/react";

const LetterCard = (props) => {
    return (
        <LetterCardLayout paint={props.paint}>
            {props.letter}
        </LetterCardLayout>

    );

}

export default LetterCard;

const LetterCardLayout = styled('div', CardLayoutStyles);