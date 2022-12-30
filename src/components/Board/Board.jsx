import { BoardLayoutStyles } from "./Board.styles";
import RowGrid from "./RowGrid/RowGrid";
import { styled } from "@stitches/react";

const Board = () => {
    const board =
        [['r', 'u', 'e', 'd', 'a'],
        ['o', 'r', 'u', 'g', 'a'],
        ['o', 'l', 'i', 'v', 'a'],
        ['h', 'u', 'e', 'c', 'a'],
        ['t', 'a', 'r', 'o', 't'],
        ['', '', '', '', '']];
    return (
        <BoardLayout>
            {
                board.map((row)=>{
                    return (
                        <RowGrid row={row}/>
                    )
                })
            }
        </BoardLayout>
    );
}

export default Board;

const BoardLayout = styled('div', BoardLayoutStyles);