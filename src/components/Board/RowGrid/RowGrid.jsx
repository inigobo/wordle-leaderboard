import { styled } from "@stitches/react";
import LetterCard from "../LetterCard/LetterCard";
import { RowGridStyles } from "./RowGrid.styles";

const RowGrid = (props) => {
    const word = props.row;
    return (
        <RowGridLayout>
            {
                word.map((letter)=>{
                    return (
                        <LetterCard letter={letter}/>
                    )
                })
            }
        </RowGridLayout>
    );
}

export default RowGrid;

const RowGridLayout = styled('div', RowGridStyles);