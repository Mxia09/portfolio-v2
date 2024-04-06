import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SimpleGrid, Box, Container, Heading} from "@chakra-ui/react";


export default function Contact() {
    return(
        <>
            <Nav />
                <Heading textAlign='center' mt='5'mb='10'>Projects</Heading>
                <Container>
                    <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                    </SimpleGrid>
                </Container>
            <Footer/>
        </>
    )
}