import styled from "@emotion/styled";
import tw from 'tailwind.macro'


const EventWrapper=styled.div`
${tw`flex bg-gray-200  h-32 mt-2 p-3 w-auto`}
`
const Input=styled.input`
 ${tw`border-orange-300 border m-2 w-64`}
`
const Button=styled.button` ${tw`border border-blue-200 m-2 bg-indigo-500 p-1 text-white`}`


const ButtonsWrapper=styled.div`
${props=>props.hide===true?tw`hidden`:tw`flex flex-col`}
`
const InputWrapper=styled.div`
${tw`flex flex-col pt-3`}
`
const UpdateButton=styled.div`
${props=>props.hide===false?tw`hidden `:tw` h-6 text-sm  mt-8`}
`
export {EventWrapper,Input,Button,ButtonsWrapper,InputWrapper,UpdateButton}