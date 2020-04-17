import React from 'react';
import { observer } from "mobx-react";

import { gridStore } from "../../../stores/GridStore";
import {HeaderWrapper, TopLevel,ThemeButton,Level,HeaderChild,Timer} from './StyledComponent'

@observer
class Header extends React.Component{
    onThemeChange=()=>{
        gridStore.onThemeChange()
    }
    render(){
        const topLevel=gridStore.topLevel
        const level=gridStore.currentLevel
        const theme=gridStore.theme
        return(
            <HeaderWrapper>
                <TopLevel padding={gridStore.isHidden}>Top Level: {topLevel}
                </TopLevel>
                <Timer hide={gridStore.isHidden===true?true:false}>
                    Time left: {gridStore.timeLeft}sec
                    </Timer>
                <HeaderChild>
                    <Level>
                        Level: {level}
                    </Level>
                    <ThemeButton onClick={this.onThemeChange}>
                        Mode: {theme}
                    </ThemeButton>
                </HeaderChild>
            </HeaderWrapper>
        )
    }
}
export {Header}