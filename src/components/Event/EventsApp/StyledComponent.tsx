import styled from "@emotion/styled";
import tw from 'tailwind.macro'
const Wrapper=styled.div`
${tw`flex flex-col items-center mt-3`}
`
const EventsCount=styled.div<{hide:any}>`
${props=>props.hide!==true?tw`hidden`:tw`text-xl`}
`
const WarningMsg=styled.div<{hide:any}>`
${props=>props.hide===true?tw`hidden`:tw`text-xl pt-24`}
`
export{Wrapper,EventsCount,WarningMsg}