import React from 'react';
import Intro from '@/components/Intro';
import Nav from '@/components/Nav';
import theme from '@/styles/themes';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: theme.colors.secondary }}>
      <Nav />
      <Intro />
      <Footer />
    </div>
  );
}