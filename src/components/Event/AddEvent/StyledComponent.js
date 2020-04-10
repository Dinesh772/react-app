import styled from "@emotion/styled";
import tw from 'tailwind.macro'
const Wrapper=styled.div`
${tw`flex  p-2 w-auto bg-blue-200`}
`

const Input=styled.input`
${tw`border-orange-300 border m-2 w-64`}
`

const Button=styled.button`${tw`border border-blue-200 h-6 text-sm mt-8  bg-indigo-500  text-white`}`
export{Wrapper,Input,Button}