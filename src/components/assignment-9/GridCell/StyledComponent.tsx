import styled from "@emotion/styled"
const CellWrapper=styled.button<{color:string,size:any}>`
display:flex;
height:${props=>props.size}px;
width:${props=>props.size}px;
margin:4px;
background-color:${props=>props.color};
transition:all 0.5s;
border:none;
:focus {
    outline: 0 !important;
}
cursor:pointer;
`
export {CellWrapper}
