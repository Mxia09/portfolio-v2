import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { Badge, Center, Container, Heading, Text, Box, Image, Stack} from "@chakra-ui/react"

export default function Project() {
    return(
        <>
            <Nav />
            <Container title="Attacl on Python">
                <Center>
                    <Heading>
                        Attack on Python
                    </Heading>
                </Center>

                <Text fontSize="sm" textAlign="center" mt='5'>
                Educational turn-based roleplay game designed to teach users the coding language Python. 
                </Text>
                <Box mt='5'>
                    <Badge>
                        Github Repository
                    </Badge>
                    - repo link here  
                </Box>
                <Box mb='5'>
                    <Badge>
                        Tech Stack
                    </Badge>
                    -  JavaScript, React, Python 3, FastAPI, PostgreSQL
                </Box>
                <Stack direction='row'>
                <Image src='/images/projects/aop/mainpage.png' alt='main page' />
                <Image src='/images/projects/aop/battle.png' alt='main page' />
                </Stack>
            </Container>
            <Footer/>
        </>
    )
}