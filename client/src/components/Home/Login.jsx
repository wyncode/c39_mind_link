import React from 'react';
import './Login.css';
import Navbar from '../NavBar/Navbar';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="FormWrap">
          <div to="/" className="logo">
            Mind-Link
          </div>
          <div className="FormContent">
            <form className="Form" action="#">
              <h1 className="FormH1">Login</h1>
              <label className="FormLabel" htmlFor="for">
                Artist Name
              </label>
              <input className="FormInput" type="text" required />
              <label className="FormLabel" htmlFor="for">
                Password
              </label>
              <input className="FormInput" type="password" required />
              <button className="FormButton" type="submit">
                Login
              </button>
              <span className="Text">Forgot Password?</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
