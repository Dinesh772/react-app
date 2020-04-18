import React from 'react';
import { observer } from "mobx-react";
import { toJS } from "mobx";

import { gridStore } from "../../../stores/GridStore";
import { GridFeild } from "../GridFeild";
import {Header} from '../Header/index'
import WinOrLoose from "../WinOrLose/index";
import  {Wrapper}  from "./StyledComponent";
import Example from "../../../stores/GridGameStats";

@observer
class GridMemoryGame extends React.Component{

    componentDidMount=()=>{
        gridStore.onAddCells()
    }
    render(){
        const lightThemeCode:string='Light'
        const darkThemeCode:string='Dark'
        const themeMode:any=toJS(gridStore.theme)===lightThemeCode?lightThemeCode:darkThemeCode;
        if(gridStore.gameStatus==='playing'){
        return(
            
            <Wrapper theme={themeMode}>
                <Header />
                <GridFeild />
                
                <Example />
            </Wrapper>
        )}
        else{
            return(
                <Wrapper theme={themeMode}>
                <Header />
                <WinOrLoose /> 
                <Example /> 
            </Wrapper>
            )
        }
    }
}
export {GridMemoryGame}