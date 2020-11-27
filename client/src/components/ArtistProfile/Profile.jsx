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
        <div className="banner">
          Banner
          <div className="infoarea">
            <div className="userInfo">
              {profileData.firstName} {profileData.lastName}
            </div>
            <div className="social">{profileData.socialMedia}</div>
          </div>
          <div className="photo">
            <img
              alt="User"
              className="profilephoto"
              id="user"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drake-attends-the-top-boy-uk-premiere-at-hackney-news-photo-1586363414.jpg?crop=1.00xw:0.708xh;0,0.0457xh&resize=480:*"
            ></img>
          </div>
          <div className="bio">
            Bio
            <div>{profileData.bio}</div>
          </div>
          <div className="myprojects">My Projects</div>
        </div>
        <div className="textarea">
          <div className="musicarea">
            <div>
              <img
                alt="player"
                className="player"
                src="https://store-images.s-microsoft.com/image/apps.20950.64845563003609955.93424b04-87f5-4c71-adcd-6aa4ef062790.7472f425-5a49-471c-85a2-eb1acc047b57?mode=scale&q=90&h=1080&w=1920&format=jpg"
              ></img>
            </div>
          </div>
          <div className="comments">Comments</div>
        </div>
      </div>
    </>
  );
};
export default Profile;
