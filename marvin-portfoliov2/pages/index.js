import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Intro from '@/components/Intro';
import Nav from '@/components/Nav';
import theme from '@/styles/themes';



export default function Home() {
  return (
    <div style={{ backgroundColor: theme.colors.secondary }}>
      <ChakraProvider theme={theme}>
        <Nav />
        <Intro />
      </ChakraProvider>
    </div>
  );
}
