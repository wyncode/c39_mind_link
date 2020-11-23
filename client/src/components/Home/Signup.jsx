import React from 'react';
import './Signup.css';
import NavBar from '../NavBar/Navbar';
const Signup = () => {
  return (
    <>
      <NavBar />
      <div className="signupContainer">
        <div className="FormWrap">
          <div className="FormContent">
            <form className="Form" action="#">
              <h1 className="FormH1">Create Account</h1>
              <label className="FormLabel" htmlFor="for">
                Artist Name
              </label>
              <input className="FormInput" type="name" required />
              <label className="FormLabel" htmlFor="for">
                Name
              </label>
              <input className="FormInput" type="name" required />
              <label className="FormLabel" htmlFor="for">
                Email
              </label>
              <input className="FormInput" type="email" required />
              <label className="FormLabel" htmlFor="for">
                Password
              </label>
              <input className="FormInput" type="password" required />
              <button className="FormButton" type="submit">
                Continue
              </button>
              <span className="Text">Forgot Password?</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
