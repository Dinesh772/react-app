//import tw from 'tailwind.macro'
import styled from "@emotion/styled"

const HeaderWrapper=styled.div`
width:300px;
display:flex;
flex-direction:column;
margin-top:60px;
`
const TopLevel=styled.div<{padding:any}>`
width:300px;
display:flex;
justify-content:center;
font-size:20px;
font-family:verdana;
font-weight:600;
padding-bottom:${props=>props.padding===true?'24':'0'}px;
`
const ThemeButton=styled.button`
    border:1px solid gray;
    border-radius:4px;
    font-size:18px;
    padding:2px;
    font-weight:600;
    color:inherit;
    :hover{
        outline: none;
    }
`
const Level=styled.div`
font-size:20px;
font-weight:600;
`
const HeaderChild=styled.div`
display:flex;
justify-content:space-between;
width:280px;
margin:20px;
`
const Timer=styled.div<{hide:any}> `
display:${props=>props.hide!==true?'flex':'none'};
justify-content:flex-end;

`
export {HeaderWrapper,TopLevel,ThemeButton,Level,HeaderChild,Timer}