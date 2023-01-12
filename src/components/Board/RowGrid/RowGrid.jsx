import { styled } from "@stitches/react";
import LetterCard from "../LetterCard/LetterCard";
import { RowGridStyles } from "./RowGrid.styles";

const RowGrid = (props) => {

    const slicedWord = props.row.word.split('');
    const slicedPaint = props.row.paint.split('');
    console.log(props);
    return (
        <RowGridLayout>
            {
                slicedWord.map((letter, index)=>{
                    return (
                        <LetterCard letter={letter} paint={slicedPaint[index]} key={'l'+index}/>
                    )
                })
            }
        </RowGridLayout>
    );
}

export default RowGrid;

const RowGridLayout = styled('div', RowGridStyles);