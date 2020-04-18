import tw from 'tailwind.macro'
import styled from "@emotion/styled"

const Wrapper=styled.div<{theme:any}>`
${props=>props.theme==='Light'?tw`bg-indigo-100`:tw`bg-gray-900`};
color:${props=>props.theme==='Light'?'black':'white'};
${tw`flex flex-col  items-center min-w-full  min-h-screen `};
transition:all .8s;
`
export  {Wrapper}