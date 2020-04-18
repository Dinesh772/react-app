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
        const topLevel=(gridStore.topLevel)
        const level=(gridStore.currentLevel)
        const theme=(gridStore.theme)
        const isCellsHidden=(gridStore.isHidden)
        const timerHideStatus=(gridStore.isHidden===true?true:false)
        const timeLeft=(gridStore.timeLeft)
        return(
            <HeaderWrapper>
                <TopLevel padding={isCellsHidden}>Top Level: {topLevel}
                </TopLevel>
                <Timer hide={timerHideStatus}>
                    Time left: {timeLeft}sec
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