import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Profile.css';
import NavBar from '../NavBar/Navbar';

const Profile = () => {
  const [profileData, setProfileData] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/users/me');
        setProfileData(response.data);
      } catch (error) {
        swal('Error: ', error.toString());
      }
    };
    fetchProfile();
  }, [profileData]);

  return (
    <>
      <NavBar />
      <div className="fullpage">
        <div className="infocontainer">
          <div className="pic">
            <img
              alt="User"
              className="be6sR"
              src="https://scontent-mia3-1.cdninstagram.com/v/t51.2885-19/s150x150/116426504_1186323501702731_3953026223783822984_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&amp;_nc_ohc=i4TfFI981w4AX855Lf-&amp;tp=1&amp;oh=ec381ebad1a65853271deb77e412aeae&amp;oe=5FE3E0E9"
            ></img>
          </div>
          <div className="myinfo">
            Profile Info
            <ul>
              <li>{profileData.firstName}</li>
            </ul>
          </div>

          <div className="projects">Current Projects</div>
        </div>

        <div className="info">
          <div className="me">About me</div>
          <div className="mysounds">
            MySounds
            <ul>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="comments">
          Comments
          <div>
            <textarea type="text" col="10" row="10" />
            <button className="commentbtn">Comment</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
