import React from 'react';
import '../../App.css';
import { Button } from '../NavBar/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video src='/client/public/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Hero Section Header</h1>
      <p>Hero Section Subheader</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Sign Up
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
