import React from 'react';
import { toJS } from "mobx";
import { gridStore } from "../../../stores/GridStore";
import { GridCell } from "../GridCell";
import { GridWrapper } from "./StyledComponent";

class GridFeild extends React.Component{
    render(){
        const gridObjects=toJS(gridStore.gridCells)
        const gridCells=gridObjects.map(cell=><GridCell key={cell.id} cell={cell}/>)
        const width=gridStore.cellsDisplayTimer*100;
        console.log(width)
        return(
            <GridWrapper width={width+80}> 
                {gridCells }
            </GridWrapper>
        )
    }
}
export {GridFeild}