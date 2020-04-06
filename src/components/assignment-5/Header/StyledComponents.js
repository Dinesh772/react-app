import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const Header=styled.div`
${props=>props.theme==='dark'? tw`bg-gray-800 text-white` : tw`bg-white text-black` };
padding-right: 1.25rem;
padding-left: 1.25rem;
padding-top: 0.75rem;
padding-bottom: 0.75rem;
width: 100%;
position:-webkit-sticky;
position:sticky;
top:0;
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
const P=styled.p`
${tw`font-bold mx-3`}
`
const Button=styled.button`
${tw`border border-solid p-2 ml-3 focus:outline-none cursor-default `}
${props=>props.theme=== "dark" ? tw`border-white` : tw`border-black`}
`
export {Header,H1,Nav,P,Button};
// w-1/2 w-3/5 flex flex-wrap justify-end items-center  
