import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const CardWrapper=styled.div`
${tw`rounded-sm my-10 mx-5 w-64 h-64 cursor-pointer  shadow-custom `}
${props=>props.theme === "light" ? tw`bg-white` : tw`bg-blue-700 text-white`}
`
const Image=styled.div`
${tw`h-48 m-auto w-4/5`}
`
export {CardWrapper,Image};
