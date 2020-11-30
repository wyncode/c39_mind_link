import React, { useContext } from 'react';
import './Profile.css';
import NavBar from '../NavBar/Navbar';
import { AppContext } from '../../context/AppContext';

const Profile = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="banner">
          <div className="infoarea">
            <div className="userInfo">
              {currentUser?.firstName ? `${currentUser.firstName} ` : ''}
              {currentUser?.lastName ? currentUser.lastName : ''}
            </div>
            <div className="social">
              {currentUser?.socialMedia ? currentUser.socialMedia : ''}
            </div>
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
            <h2>About Me</h2>
            <div>{currentUser?.bio ? `${currentUser.bio} ` : ''}</div>
          </div>
          <div className="myprojects">
            My Projects
            <div className="theprojects"></div>
          </div>
        </div>
        <div className="textarea">
          <div className="musicarea">
            <div>
              <div className="songs">
                {currentUser?.myMusicOne ? `${currentUser.myMusicOne} ` : ''}
              </div>
              <div className="songs">
                {currentUser?.myMusicTwo ? `${currentUser.myMusicTwo} ` : ''}
              </div>
              <div className="songs">
                {currentUser?.myMusicThree
                  ? `${currentUser.myMusicThree} `
                  : ''}
              </div>
              <div className="songs">
                {currentUser?.myMusicFour ? `${currentUser.myMusicFour} ` : ''}
              </div>
            </div>
          </div>
          <div className="comments">
            Comments
            <textarea className="profilecomments" type="text"></textarea>
            <button className="submitcomment">submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
