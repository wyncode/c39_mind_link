import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Profile.css';
import NavBar from '../NavBar/Navbar';
import { AppContext } from '../../context/AppContext';

const Profile = () => {
  const [profileData, setProfileData] = useState('');
  const { currentUser } = useContext(AppContext);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('/api/users/me');
      setProfileData(response.data);
    } catch (error) {
      swal('Error: ', error.toString(), {
        icon: 'error'
      });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [profileData]);

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="banner">
          Banner
          <div className="infoarea">
            <div className="userInfo">
              {profileData?.firstName ? `${profileData.firstName} ` : ''}
              {profileData?.lastName ? profileData.lastName : ''}
            </div>
            <div className="social">{`${profileData.socialMedia}`}</div>
          </div>
          <div className="photo">
            <img
              alt="User"
              className="profilephoto"
              id="user"
              src={currentUser?.avatar}
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
          <div className="comments">
            Comments
            <textarea className="" type="text"></textarea>
            <button>submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
