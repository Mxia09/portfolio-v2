import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { Container, Heading, Box, Text, Button, Center, Link, Image} from "@chakra-ui/react"

export default function() {
    return( 
        <>
        <Nav />
            <Container>
                <Box 
                    borderRadius='lg'
                    textAlign='center'
                    mb='4'
                    p='3'
                    mt='5'
                    >
                    <Heading>Marvin Xia</Heading>
                    <Text textAlign='center'>Fullstack web developer based in East Bay CA</Text>
                </Box>
                <Center>
                    <Image alignItems='center' boxSize='300px' src="images/fullshot.png" alt='Marvin' />
                </Center>
                <Box mt='5'>
                    <Text mb='4'>
                        Hello, my name is Marvin and I am a passionate full-stack engineer located in the greater San Francisco Bay Area
                        of California. As a developer I love building things that are not only artistic and expressive but also bring people
                        together and make their lives much more convenient. My goal as a burdgeoning web developer is to create solutions
                        that bring about a postive impact on my local community and the world at large. 
                    </Text>

                    <Text mb='4'>
                        Before venturing into the world of coding, I enjoyed a successful career in the telecommunications industry while also 
                        pursuing my creative passions as a writer and performing artist. These combined experiences have equipped me with the 
                        ability to foster meaningful connections, a skill that I am eager to leverage in my pursuit of creating new passion 
                        projects that will ultimately unite people and solve real-life challanges. 
                    </Text>
                    <Center>
                        <Button mr='5' bg='cyan'>Resume</Button>
                        <Button bg='teal'>
                        <Link href={'/contact'} style={{ textDecoration: 'none' }}>Contact</Link>
                        </Button>
                    </Center>
                </Box>
            </Container>
        <Footer />
        </>
    )
}