//import tw from 'tailwind.macro'
import styled from "@emotion/styled"

const GridWrapper=styled.div<{columns:any,disable:any}>`
display:grid;
grid-template-columns:${props=>props.columns} ;

`
export {GridWrapper}

// ${props=>({width:`${props.width}px`})};
// ${tw`flex flex-wrap justify-center items-center`};