import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Insta from '../insta'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Insta/>
      <Footer />
    </>
  );
}

export default Home;
