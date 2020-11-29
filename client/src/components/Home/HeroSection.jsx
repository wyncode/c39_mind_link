import React from 'react';
import '../../App.css';
import { SignUpButton } from './SignUpButton';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video src='/client/public/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>MindLink</h1>
      <p>Start your own music collaboration project and upload your idea.</p>
      <div className="hero-btns">
        <SignUpButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Sign Up
        </SignUpButton>
      </div>
    </div>
  );
};

export default HeroSection;
