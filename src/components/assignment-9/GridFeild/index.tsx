import React from 'react';
import { toJS } from "mobx";
import { observer } from "mobx-react";

import { gridStore } from "../../../stores/GridStore";
import { GridCell } from "../GridCell";
import { GridWrapper } from "./StyledComponent";
@observer
class GridFeild extends React.Component{
    render(){
        const gridObjects=toJS(gridStore.gridCells)
        const gridCells=gridObjects.map(cell=><GridCell key={cell.id} cell={cell}/>)
        const gridTemplateColumnValue:string='auto ';
        let gridColumn:any=gridTemplateColumnValue;
        for(let i=1;i<gridStore.cellsPerColumn;++i){
            gridColumn+=gridTemplateColumnValue
        }
        return(
            <GridWrapper columns={gridColumn} disable={gridStore.isHidden} > 
                {gridCells }
            </GridWrapper>
        )
    }
}
export {GridFeild}