import { BoardLayoutStyles } from "./Board.styles";
import RowGrid from "./RowGrid/RowGrid";
import { styled } from "@stitches/react";
import LetterCard from "./LetterCard/LetterCard";

const Board = ({board}) => {

    console.log('board', board);
    return (
        <BoardLayout>
            {
                board.map((row) => {
                    console.log(row.word);
                    console.log(row.paint);
                    const slicedWord = row.word.split('');
                    const slicedPaint = row.paint.split('');
                    return (
                        <RowGrid>
                            {
                                slicedWord.map((letter, index) => {
                                    return (
                                        <LetterCard letter={letter} paint={slicedPaint[index]} key={'l' + index} />
                                    )
                                })
                            }
                        </RowGrid>
                    )
                })
            }
        </BoardLayout>
    );
}

export default Board;

const BoardLayout = styled('div', BoardLayoutStyles);