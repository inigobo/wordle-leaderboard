import { BoardLayoutStyles } from "./Board.styles";
import RowGrid from "./RowGrid/RowGrid";
import { styled } from "@stitches/react";

const Board = (props) => {
    console.log(props.board)
    return (
        <BoardLayout>
            {
                props.board.map((word,paint,index)=>{
                    return (
                        <RowGrid row={word} paint={paint} key={'r'+index}/>
                    )
                })
            }
        </BoardLayout>
    );
}

export default Board;

const BoardLayout = styled('div', BoardLayoutStyles);