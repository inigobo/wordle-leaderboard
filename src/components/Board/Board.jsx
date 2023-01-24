import { BoardLayoutStyles } from "./Board.styles";
import RowGrid from "./RowGrid/RowGrid";
import { styled } from "@stitches/react";
import LetterCard from "./LetterCard/LetterCard";

const Board = ({ board }) => {
    return (
        <BoardLayout>
            {
                board.map((row, index) => {
                    const slicedWord = row.word.split('');
                    const slicedPaint = row.paint.split('');
                    return (
                        <RowGrid key={'row' + index}>
                            {
                                slicedWord.map((letter, index) => {
                                    return (
                                        <LetterCard letter={letter} paint={slicedPaint[index]} key={'l' + index + letter} />
                                    )
                                })
                            }
                        </RowGrid>
                    );
                })
            }
        </BoardLayout>
    );
}

export default Board;

const BoardLayout = styled('div', BoardLayoutStyles);