import React from 'react';
import { gridStore } from "../../../stores/GridStore";
import { CellWrapper } from "./StyledComponent";

class GridCell extends React.Component<{cell:any}>{
    handleClick=()=>{
        const {cell}=this.props;
        console.log(cell.id)
        gridStore.onSelectedCell(cell)

    }
    render(){
        const {cell}=this.props;
        //const width=gridStore.cellsDisplayTimer
        return(
            <CellWrapper color={cell.isSelected===true?'blue':'lightgray'}
            onClick={this.handleClick}>
            
            </CellWrapper>
        )
    }
}
export {GridCell}