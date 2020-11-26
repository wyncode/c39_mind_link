import React from 'react';
import './ResetPasswords.css';
import Navbar from '../NavBar/Navbar';

const ResetPasswords = () => {
  return (
    <>
      <Navbar />
      <div className="resetContainer">
        <div className="FormContent">
          <form className="Form" action="#">
            <h1 className="FormH1">Reset Password</h1>
            <label className="FormLabel" htmlFor="for">
              Artist Name
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              type="text"
              required
            />
            <label className="FormLabel" htmlFor="for">
              New Password
            </label>
            <input className="FormInput" type="password" required />
            <label className="FormLabel" htmlFor="for">
              Confirm Password
            </label>
            <input className="FormInput" type="password" required />
            <button className="FormButton" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswords;
