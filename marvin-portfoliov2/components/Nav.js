import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Center , Heading, Flex, Container, Stack, Box, Text} from '@chakra-ui/react'
import Logo from "./Logo";
import { useTheme } from "@chakra-ui/react";


export default function Nav() {
    const theme = useTheme();
    return (
        <div style={{ backgroundColor: theme.colors.secondary }}>
            <Heading>
            <Logo />
            </Heading>

        <Container mt="-10" mb="10" pb="5">
            <Center>
                <Stack direction={{ base: 'column', md: 'row' }} spacing='35px'  >
                    <Box>
                        <Link href={'/'}>
                            <Text fontWeight="extrabold" fontSize={20}>About</Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link href={'/projects'}>
                            <Text fontWeight="extrabold" fontSize={20}>Projects</Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link href={'/contact'}>
                            <Text fontWeight="extrabold" fontSize={20}>Contact</Text>
                        </Link>
                    </Box>
                </Stack>
            </Center>
        </Container>
        </div>
    )
}