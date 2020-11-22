import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <div className="FormWrap">
          <div to="/" className="logo">
            Mind-Link
          </div>
          <div className="FormContent">
            <form className="Form" action="#">
              <h1 className="FormH1">Login to your account</h1>
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

export default Login;
