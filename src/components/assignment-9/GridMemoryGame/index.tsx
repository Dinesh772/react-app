import React from 'react';
import {Header} from '../Header/index'
import { gridStore } from "../../../stores/GridStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { GridFeild } from "../GridFeild";
import { Wrapper } from "./StyledComponent";

@observer
class GridMemoryGame extends React.Component{

    componentDidMount=()=>{
        gridStore.onAddCells()
    }
    render(){
        console.log(toJS(gridStore.gridCells))
        return(
            <Wrapper>
                <Header />
                <GridFeild />
            </Wrapper>
        )
    }
}
export {GridMemoryGame}