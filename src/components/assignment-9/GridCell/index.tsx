import React from 'react';
import { observer } from "mobx-react";

import { gridStore } from "../../../stores/GridStore";
import { CellWrapper } from "./StyledComponent";

@observer
class GridCell extends React.Component<{cell:any}>{
    handleClick=()=>{
        const {cell}=this.props;
        gridStore.onCellClicked(cell)
    }
    render(){
        const lightThemeCode:string='Light'
        const {cell}=this.props;
        const theme=gridStore.theme
        const cellColor:string=(theme===lightThemeCode?'#669900':'lightgray');
        const cellThemeColor:string=(theme===lightThemeCode?'#b3b3b3':'#404040')
        const width=90-(gridStore.cellsPerColumn*4)

        return(
            <CellWrapper  color={cell.isCellShouldDisplay===true?cellColor:cellThemeColor} size={width}
            onClick={this.handleClick} disabled={cell.isCellShouldDisplay}>
            </CellWrapper>
        )
    }
}
export {GridCell}