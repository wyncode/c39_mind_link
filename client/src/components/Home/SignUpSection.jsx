import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpSection.css';

const SignUpSection = () => {
  return (
    <div className="suSection" id="sign-up">
      <div className="suSection__container">
        <div className="suSection__content">
          <h1>Find Your Next Project</h1>
          <h2>Sign Up Today</h2>
          <p>Collaborate With Other Artists</p>
          <Link to="/sign-up">
            <button className="suSection__btn">Sign Up</button>
          </Link>
        </div>
        <div className="suSection__img--container">
          <div className="suSection__img--card" id="card-2">
            <i className="fas fa-icons"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
