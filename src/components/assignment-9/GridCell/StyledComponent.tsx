//import tw from 'tailwind.macro'
import styled from "@emotion/styled"

const CellWrapper=styled.div<{color:string}>`
display:flex;
height:100px;
width:100px;
margin:5px;
background-color:${props=>props.color};
`
export {CellWrapper}