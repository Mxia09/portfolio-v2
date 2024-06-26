import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Alert, Center, Heading, InputLeftElement, Textarea, useTheme } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Flex, Container, Box, Button, useColorModeValue, VStack, InputGroup} from '@chakra-ui/react';
import { BsPerson, BsPhone } from 'react-icons/bs'
import { MdOutlineMail, MdOutlineEdit, MdMarkEmailRead} from "react-icons/md";
import { useForm, ValidationError } from '@formspree/react';
import React from "react";
import { useState, useEffect } from "react";



export default function Contact() {
    const [state, handleSubmit] = useForm("mgegpwal");
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setShowAlert(true);
    
            setTimeout(() => {
                window.location.reload(false);
            }, 2000);
        }
    }, [state.succeeded]);

    return(
        <>
            <Nav/>
            <Container mt='5'>
                {showAlert && (
                    <Alert status='success' mb='4'> 
                    <MdMarkEmailRead /> &nbsp;
                    Email Received!
                    </Alert>
                )}
            <form onSubmit={handleSubmit}>
                <Heading textAlign='center' mb='5'>Let's get in touch</Heading>
                    <Box
                        bg={useColorModeValue('white', 'gray.700')}
                        borderRadius="lg"
                        p='8'
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        shadow='base'
                        boxShadow='dark-lg'
                        rounded='md' 
                        >
                            <FormControl isRequired>
                                <FormLabel textAlign='center'>Email</FormLabel>
                                <InputGroup>
                                    <InputLeftElement>
                                        <MdOutlineMail/>
                                    </InputLeftElement>
                                    <Input type='email' name='email' placeholder='Your Email'/>
                                </InputGroup>
                        </FormControl>
                    

                        <FormControl isRequired>
                                <FormLabel textAlign='center'>Contact Number</FormLabel>
                                <InputGroup>
                                    <InputLeftElement>
                                        <BsPhone />
                                    </InputLeftElement>
                                    <Input type='number' name='number' placeholder='Your Number'/>
                                </InputGroup>
                        </FormControl>


                        <FormControl isRequired>
                                <FormLabel textAlign='center'>Name</FormLabel>
                                <InputGroup>
                                    <InputLeftElement>
                                        <BsPerson />
                                    </InputLeftElement>
                                    <Input type='name' name='name' placeholder='Your Name'/>
                                </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                                <FormLabel textAlign='center'>Message</FormLabel>
                                <InputGroup>
                                    <MdOutlineEdit style={{ position: 'absolute', left: '1rem', top: '10%',}}/>
                                    <Textarea 
                                        name='message'
                                        placeholder='Your Message'
                                        rows='6'
                                        resize='1'
                                        paddingLeft="2rem"
                                        />
                                </InputGroup>
                        </FormControl>

                    <Center>
                        <Button colorScheme='cyan' mt='5' type="submit"  disabled={state.submitting}>
                            {state.submitting ? 'Sending...' : 'Send Email'}
                        </Button>
                    </Center>
                    </Box>
                    </form>
            </Container>
            <Footer />
        </>
    )
}