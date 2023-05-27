import React from 'react';
import '../../App.css';
import News from '../News';
import Hero from '../Hero';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Hero />
      <News />
      <Footer />
    </>
  );
}

export default Home;