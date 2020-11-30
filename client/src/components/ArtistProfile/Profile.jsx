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
            <div className="theprojects">
              <a
                href="https://farah-mindlink-api.herokuapp.com/project-details/5fbc0f77ac313e4764cccc9b
"
                target="_blank"
              >
                <button>Project One</button>
              </a>
            </div>
            <div className="theprojects">
              <a
                href="https://farah-mindlink-api.herokuapp.com/project-details/5fc1c3d166145104bd9c3093
"
                target="_blank"
              >
                <button>Project Two</button>
              </a>
            </div>
          </div>
        </div>
        <div className="textarea">
          <div className="musicarea">
            <div>
              {' '}
              My Music
              <div className="songs">
                <a
                  href="https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
                  target="_blank"
                >
                  <button>Song One</button>
                </a>
              </div>
              <div className="songs">
                <a
                  href="https://www.youtube.com/watch?v=xWggTb45brM"
                  target="_blank"
                >
                  <button>Song Two</button>
                </a>
              </div>
              <div className="songs">
                <a
                  href="https://www.youtube.com/watch?v=uxpDa-c-4Mc"
                  target="_blank"
                >
                  <button>Song Three</button>
                </a>
              </div>
              <div className="songs">
                <a
                  href="https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
                  target="_blank"
                >
                  <button>Song Four</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
