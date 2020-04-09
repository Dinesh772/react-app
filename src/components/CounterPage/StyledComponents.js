import styled from '@emotion/styled'
//import tw from 'tailwind.macro'

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border:1px solid #ff66ff;
height:100vh;
width:100%;
`
const Button = styled.button`
height:15px;
outline:none;

outline:none;
font-size:14px;
`
const DisplayArea=styled.div`
display:flex;
width:60%;

border:1px solid green;

`
const Child=styled.div`
display:flex;
height:40px;
justify-content:space-between;
width:240px;
`
const Input=styled.input`
width:60%;
display:flex;
outline:none;
font-size:28px;
text-align:center;
padding:10px;
border:2px solid green;
border-radius:4px;
`
const H1=styled.h1`
font-size:45px;
font-weight:bold;
padding:15px;
`
const CounterButton=styled.button`
height:40px;
width:40px;
outline:none;
color:white;
background-color:blue;
font-size:25px;
font-weight:bold;
border-radius:4px;
`
export {Wrapper,Button,DisplayArea,Child,Input,H1,CounterButton}