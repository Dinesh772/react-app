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
width:100%;`


export {Wrapper,Child};
