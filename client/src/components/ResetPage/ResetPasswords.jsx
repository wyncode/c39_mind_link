import React from 'react';
import './ResetPasswords.css';

const ResetPasswords = () => {
  return (
    <div className="container">
      <form>
        <h2>Reset Password</h2>
        <input type="text" placeholder="Artist Name" required />
        <input type="password" placeholder="New Password" required />
        <input type="password" placeholder="Confirm Password" required />
      </form>
    </div>
  );
};

export default ResetPasswords;

//left off here 11-20-2020 1:00am
