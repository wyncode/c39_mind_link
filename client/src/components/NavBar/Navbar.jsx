import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link, useHistory } from 'react-router-dom';
import { LoginButton } from './LoginButton';
import { LogOutButton } from './LogOutButton';
import './Navbar.css';

import axios from 'axios';
import swal from 'sweetalert';

const Navbar = () => {
  const { currentUser } = useContext(AppContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('users');
      setCurrentUser(null);
      swal(response.data.message, 'You have signed out!').then(() =>
        history.push('/')
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {currentUser ? (
            <Link
              to="/profile"
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              Mind-Link
            </Link>
          ) : (
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Mind-Link
            </Link>
          )}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              {currentUser ? (
                <Link
                  to="/edit-profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Edit Profile
                </Link>
              ) : (
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  How it Works
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link
                to="/project-list"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Collaborations
              </Link>
            </li>
            <li className="nav-item">
              {currentUser ? (
                <Link
                  to="/"
                  className="nav-links-mobile"
                  onClick={(closeMobileMenu, handleLogOut)}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
          {button &&
            (currentUser ? (
              <LogOutButton buttonStyle="btn--outline" onClick={handleLogOut}>
                Logout
              </LogOutButton>
            ) : (
              <LoginButton buttonStyle="btn--outline">Login</LoginButton>
            ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
