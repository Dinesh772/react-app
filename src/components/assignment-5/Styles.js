import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const Wrapper=styled.div`
 ${props=>props.theme==='light'? tw`bg-indigo-100` : tw`bg-gray-900` };
 color:${props=>props.theme==="light"?'black':'white'};
 max-height:100%;
`
const Child=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:78vh;
width:100%;

`
const Header=styled.div`
${props=>props.theme==='dark'? tw`bg-gray-800 text-white` : tw`bg-white text-black` };
padding-right: 1.25rem;
padding-left: 1.25rem;
padding-top: 0.75rem;
padding-bottom: 0.75rem;
width: 100%;
`
const H1=styled.h1`
width: 40%;
font-size: 1.875rem;
`
const Nav=styled.div`
width: 60%;
display:flex;
flex-wrap:wrap;
justify-content:flex-end;
align-items:center;
`
export {Wrapper,Child,Header,H1,Nav};
// w-1/2 w-3/5 flex flex-wrap justify-end items-center