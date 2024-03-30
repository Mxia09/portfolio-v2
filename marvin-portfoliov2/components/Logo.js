// import Link from "next/link";
// import styled from "styled-components";
// import { Flex, Center, } from '@chakra-ui/react'

// const LogoWrapper = styled.span`
//     align-items: center;
//     display: inline-flex;
//     font-size: 1.2rem;
//     font-weight: bold;
//     height: 40px;
//     padding: 20px;
// `;



// export default function Logo() {
//     return(
//         <LogoWrapper>
//             <Link href={"/"}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" styles="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M11.219 3.375 8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851 19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z">
//                 </path>
//             </svg>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" styles="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
//                     <path d="M12 2c-4.963 0-9 4.038-9 9v8h.051c.245 1.691 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9zm7 16.5c0 .827-.673 1.5-1.5 1.5-.449 0-1.5 0-1.5-2v-1h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1H8v1c0 1.845-.774 2-1.5 2-.827 0-1.5-.673-1.5-1.5V11c0-3.86 3.141-7 7-7s7 3.14 7 7v7.5z"></path><circle cx="9" cy="10" r="2"></circle><circle cx="15" cy="10" r="2"></circle>'
//             </svg>
//             </Link>
//         <span>Marvin Xia</span>
//         </LogoWrapper>
//     )
// }

import Link from "next/link";
import styled from "styled-components";
import { Flex, Center } from '@chakra-ui/react'

const LogoWrapper = styled.span`
    align-items: center;
    display: inline-flex;
    font-size: 1.5rem;
    font-weight: bold;
    height: 45px;
    padding: 20px;
    padding-bottom:10px;
`;

const StyledSvg = styled.svg`
    margin-top: -5px;
    width: 25px;
    height:25px;
`;

export default function Logo() {
    return (
        <LogoWrapper>
            <Link href={"/"}>
                <StyledSvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11.219 3.375 8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851 19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"></path>
                </StyledSvg>
                <StyledSvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2c-4.963 0-9 4.038-9 9v8h.051c.245 1.691 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9zm7 16.5c0 .827-.673 1.5-1.5 1.5-.449 0-1.5 0-1.5-2v-1h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1H8v1c0 1.845-.774 2-1.5 2-.827 0-1.5-.673-1.5-1.5V11c0-3.86 3.141-7 7-7s7 3.14 7 7v7.5z"></path>
                    <circle cx="9" cy="10" r="2"></circle>
                    <circle cx="15" cy="10" r="2"></circle>
                </StyledSvg>
            </Link>
            <span>Marvin Xia</span>
        </LogoWrapper>
    )
}