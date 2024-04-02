import React from "react";
import Logo from "./Logo";
import { Box, Text, Flex, Spacer, Center, Stack, useColorMode, useColorModeValue, Button} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({href, children}) => {
    return(
        <Box
            as="a"
            href={href}
            px={2}
            py={1}
            rounded="md"
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('#FFFAF0', 'gray.700')
            }}
        >
            {children}
        </Box>
    )
}

export default function Nav() {
    const {colorMode, toggleColorMode } = useColorMode();

    return(
        <>
            <Box bg={useColorModeValue('#FFFAF0', 'gray.900')} px={4}>
                <Flex>
                    <Logo/>
                    <Spacer />
                    <Center>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing='35px'  >
                            <NavLink href={'/'}>
                                <Text fontWeight="extrabold" fontSize={20}>About</Text>
                            </NavLink>
                            <NavLink href={'/projects'}>
                                <Text fontWeight="extrabold" fontSize={20}>Projects</Text>
                            </NavLink>
                            <NavLink href={'/contact'}>
                                <Text fontWeight="extrabold" fontSize={20}>Contact</Text>
                            </NavLink>
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
