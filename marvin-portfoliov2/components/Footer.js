import { Center,Flex, Box, Spacer, useColorModeValue, IconButton} from "@chakra-ui/react";
import { BsGithub, BsLinkedin} from 'react-icons/bs'


export default function Footer() {
return(
    <Flex>
        <Box fontSize='sm' mt='5'>
            ©2023 Marvin Xia. All Rights Reserved.
        </Box>
    <Spacer />
        <Center>
            <Box as='a' href="https://www.linkedin.com/in/marvin-xia/" target="_blank" rel="noopener noreferrer">
                <IconButton
                    aria-lable='linkedin'
                    variant='ghost'
                    size='sm'
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                        bg: 'cyan',
                        color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                    />
            </Box>
            <Box as='a' href="https://github.com/Mxia09" target="_blank" rel="noopener noreferrer">
                <IconButton
                    aria-lable='github'
                    variant='ghost'
                    size='sm'
                    icon={<BsGithub size="20px" />}
                    _hover={{
                        bg: 'cyan',
                        color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                    />
            </Box>
        </Center>
    </Flex>
    )
}