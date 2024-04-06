import React from 'react';
import Nav from '@/components/Nav';
import theme from '@/styles/themes';
import Footer from '@/components/Footer';
import { Container, Box, Text, Heading, Center, Divider, Button, Link, Image} from '@chakra-ui/react';
export default function Home() {
  return (
    // <div style={{ backgroundColor: theme.colors.secondary }}>
      <>
        <Nav />
        <Container >
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
          <Image
            borderRadius='full'
            boxSize='130px'
            src='/images/marvin.png'
          />
          </Center>
          <Divider mt='3'/>

        <Box           
          mt='5'
          ml={{ md: 4 }}
          textAlign="center"
          mb='5'>
          <Text fontSize='sm'>
            Hello, my name is Marvin and I am full-stack software engineer based in California. I've a passion for building efficient and user-friendly
            web applications for people that will bring about a positive change in their lives. When not trying to solve real-life problems with code, I 
            am usually happily exploring the world with my dog with a hot cup of coffee or tea in hand. 
          </Text> 
        </Box>
        <Divider/>
        <Center>
          <Box
            mt='5'
            mb='5'>
            <Button colorScheme='teal'>
                <Link href={'/about'} style={{ textDecoration: 'none' }}>Read More</Link>
            </Button>
          </Box>
        </Center>
        </Container>
        <Footer />
      </>
    // </div>
  );
}