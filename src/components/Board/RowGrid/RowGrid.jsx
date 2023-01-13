import { styled } from "@stitches/react";
import LetterCard from "../LetterCard/LetterCard";
import { RowGridStyles } from "./RowGrid.styles";

const RowGrid = ({children}) => {
    return (
        <RowGridLayout>
            {children}
        </RowGridLayout>
    );
}

export default RowGrid;

const RowGridLayout = styled('div', RowGridStyles);