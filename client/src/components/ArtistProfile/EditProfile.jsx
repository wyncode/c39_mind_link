import React from 'react';
import './EditProfile.css';
import Navbar from '../NavBar/Navbar';

export const EditProfile = () => {
  return (
    <>
      <Navbar />
      <div className="InfoTitle">Basic Info</div>

      <div className="SCbuttons">
        <button>Cancel</button>
        <button>Save</button>
      </div>

      <div className="name">
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
      </div>

      <div className="Email">
        <label>Email</label>
        <input type="email" />
      </div>

      <div className="bio">
        <label>Bio</label>
        <textarea rows="5" cols="100" placeholder="About Me"></textarea>
      </div>
    </>
  );
};

export default EditProfile;

// {
//   /* <div className="BasicInfo">
//           Basic Info
//         <input className="First" placeholder="First Name"></input>

//         <input className="First" placeholder="Last Name"></input>

//         <input className="First" placeholder="Artist Name"></input>

//         <input className="First" placeholder="First Name"></input>
//         </div> */
// }
