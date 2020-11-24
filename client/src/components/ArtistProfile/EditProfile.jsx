import React from 'react';
import './EditProfile.css';
import Navbar from '../NavBar/Navbar';

export const EditProfile = () => {
  return (
    <>
      <Navbar />
      <div className="FullPage">
        <div className="rightside">
          <form action="/action_page.php">
            <h1 className="EditTitle">Edit Profile</h1>
            <label className="title">First Name</label>
            <input type="text" />

            <label className="title">Last Name</label>
            <input type="text" />

            <label className="title">Gender</label>
            <select name="Gender">
              <option value="Gender">Choose</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label className="title">Email</label>
            <input type="text" />

            <label className="title">Social Media</label>
            <input type="text" />

            <label className="title">Bio</label>
            <textarea type="text" col="10" row="10" />

            <label className="title">Projects</label>
            <ul>
              <li>
                <input type="url" placeholder="Upload URL Here"></input>
              </li>
              <li>
                <input type="url" placeholder="Upload URL Here"></input>
              </li>
              <li>
                <input type="url" placeholder="Upload URL Here"></input>
              </li>
              <li>
                <input type="url" placeholder="Upload URL Here"></input>
              </li>
              <li>
                <input type="url" placeholder="Upload URL Here"></input>
              </li>
            </ul>
          </form>
        </div>
        <ul className="leftside">
          <li>
            <img
              alt="Change Profile Photo"
              className="be6sR"
              src="https://scontent-mia3-1.cdninstagram.com/v/t51.2885-19/s150x150/116426504_1186323501702731_3953026223783822984_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&amp;_nc_ohc=i4TfFI981w4AX855Lf-&amp;tp=1&amp;oh=ec381ebad1a65853271deb77e412aeae&amp;oe=5FE3E0E9"
            ></img>
          </li>

          <li>
            <button type="file" className="Imagebtn">
              Image
            </button>
          </li>

          <li>
            <button type="submit" className="Savebtn">
              Save
            </button>
          </li>

          <li>
            <button type="submit" className="Resetbtn">
              Reset Passord
            </button>
          </li>

          <li>
            <button type="submit" className="Deletebtn">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EditProfile;
