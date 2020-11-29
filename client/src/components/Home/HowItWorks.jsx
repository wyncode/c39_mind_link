import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="hiwContainer">
      <h1 className="hiw_h1">How it Works</h1>
      <p className="hiw_desc">Find you next collaboration with Mind-Link</p>
      <div className="hiw_wrapper">
        <div className="hiw-card">
          <div className="hiw-title">
            <i className="fas fa-headphones card-icon"></i>
            <h3 className="hiw-card-h3">Collaborate</h3>
          </div>
          <div className="hiw-perks">
            <p className="hiw_card_p">
              Whether it's a guitar riff, drum loop, a vocal a cappella or
              lyrics - just start your own music collaboration project and
              upload your idea. Then, wait for others to join in, or send
              invites to other members. You can also jump in on any other open
              project by uploading your idea as an audition.
            </p>
          </div>
        </div>
        <div className="hiw-card">
          <div className="hiw-title">
            <i className="fas fa-microphone card-icon"></i>
            <h3 className="hiw-card-h3">Manage</h3>
          </div>
          <div className="hiw-perks">
            <p className="hiw_card_p">
              Upload tracks, review auditions, discuss changes, and much more.
              Clearly set out and agree copyright shares for your song's
              composition and sound recording. Protect your published
              collaborations with audio watermarking or assign a pre-approved
              creative commons license.
            </p>
          </div>
        </div>
        <div className="hiw-card">
          <div className="hiw-title">
            <i className="fas fa-volume-up card-icon"></i>
            <h3 className="hiw-card-h3">Connect</h3>
          </div>
          <div className="hiw-perks">
            <p className="hiw_card_p">
              Members can share thoughts, ideas, or help others by posting to
              the community forum. A treasure trove of shared ideas, original
              audio, and even cover art for use in your projects. Need help? No
              problem, there's always a mentor around to answer any questions
              and help you get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
