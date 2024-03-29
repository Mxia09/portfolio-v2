import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Intro from '@/components/Intro';
import Nav from '@/components/Nav';



export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <Intro />
      </ChakraProvider>
    </>
  );
}
