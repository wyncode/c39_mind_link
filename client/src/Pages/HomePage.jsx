import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import HeroSection from '../components/Home/HeroSection';
import HowItWorks from '../components/Home/HowItWorks';
import SignUpSection from '../components/Home/SignUpSection';

// Need help doing the routes and links properly

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SignUpSection />
    </>
  );
};

export default Home;
