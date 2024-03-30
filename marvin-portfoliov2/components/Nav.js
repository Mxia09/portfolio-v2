import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Center , Flex, Container, Stack, Box} from '@chakra-ui/react'
import Logo from "./Logo";

// const HorizontalWrapper = styled.div`
//     display: flex;
// `;

export default function Nav() {
    return (
        <>
        <Logo />
        <Container mt="-10">
            <Stack direction={{ base: 'column', md: 'row' }}>
                <Box>
                    <Link href={'/'}>About</Link>
                </Box>
                <Box>
                    <Link href={'/'}>Projects</Link>
                </Box>
                <Box>
                    <Link href={'/'}>Contact</Link>
                </Box>
            </Stack>
        </Container>
        </>
    )
}