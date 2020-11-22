import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import HowItWorks from '../components/Home/HowItWorks';
import Navbar from '../components/NavBar/Navbar';

// Need help doing the routes and links properly

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
    </>
  );
};

export default Home;
