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
            <h3 className="hiw-card-h3">Subheader</h3>
          </div>
          <div className="hiw-perks">
            <p className="hiw_card_p">
              Lorem ipsum dolor sit amet, ne patrioque referrentur pro. His
              partem integre discere cu. Eu mel persius tractatos, dicit commodo
              reprimique per no. Eu mea civibus aliquando. Utinam epicuri
              sadipscing et mel.
            </p>
          </div>
        </div>
        <div className="hiw-card">
          <div className="hiw-title">
            <i className="fas fa-microphone card-icon"></i>
            <h3 className="hiw-card-h3">Subheader</h3>
          </div>
          <div className="hiw-perks">
            <p className="hiw_card_p">
              Lorem ipsum dolor sit amet, ne patrioque referrentur pro. His
              partem integre discere cu. Eu mel persius tractatos, dicit commodo
              reprimique per no. Eu mea civibus aliquando. Utinam epicuri
              sadipscing et mel.
            </p>
          </div>
        </div>
        <div className="hiw-card">
          <div className="hiw-title">
            <i className="fas fa-volume-up card-icon"></i>
            <h3 className="hiw-card-h3">Subheader</h3>
          </div>
          <div className="hiw-perks">
            <p className="hiw_card_p">
              Lorem ipsum dolor sit amet, ne patrioque referrentur pro. His
              partem integre discere cu. Eu mel persius tractatos, dicit commodo
              reprimique per no. Eu mea civibus aliquando. Utinam epicuri
              sadipscing et mel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
