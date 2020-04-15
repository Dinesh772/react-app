import tw from 'tailwind.macro'
import styled from "@emotion/styled"

const GridWrapper=styled.div<{width:any}>`
${props=>({width:`${props.width}px`})};
${tw`flex flex-wrap justify-center items-center`};
`
export {GridWrapper}