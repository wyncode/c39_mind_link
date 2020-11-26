import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Profile.css';
import NavBar from '../NavBar/Navbar';

const Profile = () => {
  const [profileData, setProfileData] = useState('');
  const fetchProfile = async () => {
    try {
      const response = await axios.get('/api/users/me');
      setProfileData(response.data);
    } catch (error) {
      swal('Error: ', error.toString());
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [profileData]);

  //{profileData.firstName}

  return (
    <>
      <NavBar />
      <div className="main">
        Main Container
        <div className="second">
          Secondary Container
          <div className="photo">Photo</div>
          <div className="bio">Bio Area</div>
        </div>
        <div className="written">
          writing area
          <div className="info">my info</div>
        </div>
      </div>
    </>
  );
};
export default Profile;
