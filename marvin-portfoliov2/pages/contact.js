import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Center, Heading, useTheme } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Flex, Container, Box, Button} from '@chakra-ui/react'

export default function Contact() {
    const theme = useTheme(); 

    return(
        <>
            <Nav/>
            <Container mt='5'>
                <Heading textAlign='center' mb='4'>Let's get in touch</Heading>
                <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' >
                    <FormControl isRequired>
                        <FormLabel textAlign='center'>Email</FormLabel>
                        <Input type='email'/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel textAlign='center'>Contact Number</FormLabel>
                        <Input type='number'/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel textAlign='center'>Name</FormLabel>
                        <Input type='name'/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel textAlign='center'>Message</FormLabel>
                        <Input type='message'/>
                    </FormControl>
                    <Center>
                        <Button colorScheme='cyan' mt='5'>Send</Button>
                    </Center>
                </Box>
            </Container>
            <Footer />
        </>
    )
}


