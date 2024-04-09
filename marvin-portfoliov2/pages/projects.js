import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SimpleGrid, Box, Container, Heading, Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Image, Text, Center} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import ProjectCard from "@/components/ProjectCardGrid";

export default function Projects() {
    return(
        <>
            <Nav />
                <Heading textAlign='center' mt='5'mb='10'>Projects</Heading>
                <Container>
                    <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                        <Box >
                        <Card size='sm'>
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                        <Stack mt='6' spacing='3'>
                                        <Center>
                                            <Heading size='md'>Project</Heading>
                                        </Center>
                                        <Text fontSize='sm' textAlign='center'>
                                            This sofa is perfect for modern tropical spaces, baroque inspired
                                            spaces, earthy toned spaces and for people who love a chic design with a
                                            sprinkle of vintage design.
                                        </Text>
                                        </Stack>
                                </CardBody>
                            </Card>
                        </Box>

                        <ProjectCard
                            id='soledout'
                            title='Soled Out'
                            >
                            Snearker and streetwear e-commerce site. 
                        </ProjectCard>

                        <ProjectCard
                            id='cashdragon'
                            title='Cash Dragon'
                            >
                            Personal finance application
                        </ProjectCard>

                        <ProjectCard
                            id='aop'
                            title='Attack on Python'
                            thumbnail='images/projects/aop/aoplogo.png'
                            >
                            Educational turn-based roleplay game designed to teach users the coding language Python
                        </ProjectCard>
                    </SimpleGrid>
                    <Center>
                    <Button bg='teal' mt='4'as='a' href="https://github.com/Mxia09" target="_blank" rel="noopener noreferrer">
                        <BsGithub/> &nbsp; Github Portfolio
                    </Button>    
                    </Center>                    
                </Container>
            <Footer/>
        </>
    )
}