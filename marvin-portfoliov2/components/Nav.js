import React from "react";
import Logo from "./Logo";
import { Box, Text, Flex, Spacer, Center, Stack, useColorMode, useColorModeValue, Button} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {Link, LinkProps as ChakraLinkProps} from "@chakra-ui/next-js";
import {LinkProps as NextLinkProps} from "next/link";
import {useRouter} from "next/router";

const NavLink = ({href, children}) => {
    return(
        <Box
            as="a"
            href={href}
            px={3}
            py={1}
            rounded="md"
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('#FFFAF0')
            }}
        >
            {children}
        </Box>
    )
}

export default function Nav({href}) {
    const {colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    const isActive = router.asPath === href;

    return(
        <>
            <Box bg={useColorModeValue('#FFFAF0', 'RGBA(0, 0, 0, 0.85)')} px={4}>
                <Flex>
                    <Logo/>
                    <Spacer />
                    <Center>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing='35px'  >
                        <Link 
                            href={'/'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('#88ccca', 'gray.700'),
                                    }}
                            px={2}
                            py={1}
                            rounded={'md'} 
                            >
                                <Text fontWeight="extrabold" fontSize={20}>Home</Text>
                            </Link>
                            <Link 
                                href={'/about'} 
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('#88ccca', 'gray.700'),
                                        }}
                                px={2}
                                py={1}
                                rounded={'md'}
                            >
                                <Text fontWeight="extrabold" fontSize={20}>About</Text>
                            </Link>
                            <Link 
                                href={'/projects'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('#88ccca', 'gray.700'),
                                        }}
                                px={2}
                                py={1}
                                rounded={'md'}
                            >
                                <Text fontWeight="extrabold" fontSize={20}>Projects</Text>
                            </Link>
                            <Link 
                                href={'/contact'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('#88ccca', 'gray.700'),
                                        }}
                                px={2}
                                py={1}
                                rounded={'md'}
                            >
                                <Text fontWeight="extrabold" fontSize={20}>Contact</Text>
                            </Link>
                        </Stack>
                    </Center>
                    <Spacer />
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Box>
        </>
    )
}