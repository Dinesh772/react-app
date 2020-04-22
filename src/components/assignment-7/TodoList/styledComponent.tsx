import styled from "@emotion/styled";
import tw from 'tailwind.macro';

const Wrapper=styled.div`
${tw`flex flex-col  w-full min-h-screen pt-24 items-center bg-gray-300`}
`
const H1=styled.h1`
${tw`text-6xl  text-gray-600`}
`
const TodosWrapper=styled.div`
${tw`flex-col w-2/6 flex justify-center items-center mt-1`}
`
export {Wrapper,H1,TodosWrapper}