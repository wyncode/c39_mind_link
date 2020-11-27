import React, { useState, useContext } from 'react';
import NavBar from '../NavBar/Navbar';
import './EditProfile.css';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const EditProfile = () => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('/api/users/edit-profile', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      console.log(response.data);
      history.push('/profile');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
  };

  return (
    <>
      <NavBar />
      <div className="editprofile">
        <div className="leftside">
          <ul>
            <li>
              <img
                alt="User"
                className="be6sR"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drake-attends-the-top-boy-uk-premiere-at-hackney-news-photo-1586363414.jpg?crop=1.00xw:0.708xh;0,0.0457xh&resize=480:*"
              ></img>
            </li>
            <li>
              <button type="file" className="Resetbtn">
                Change Avatar
              </button>
            </li>
            <li>
              <button type="submit" className="Resetbtn">
                Reset Password
              </button>
            </li>
            <li>
              <button type="submit" className="Deletebtn">
                Delete Account
              </button>
            </li>
          </ul>
        </div>

        <div className="rightside">
          <div className="topdiv">
            <h1 className="basicinfo">Basic Info</h1>
            <button className="topbtns" onSubmit={handleEditProfile}>
              Save
            </button>
            <button className="topbtnc">Cancel</button>
          </div>
          <form onSubmit={handleEditProfile}>
            <div className="ruly">
              <div className="myfname">
                <label>Artist Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="e.g. JohnRoss"
                  name="artistName"
                  onChange={handleChange}
                />
              </div>

              <div className="myfname">
                <label>First Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" e.g. John"
                  name="firstName"
                  onChange={handleChange}
                />
              </div>

              <div className="myfname">
                <label>Last Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="e.g. Ross"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>

              <div className="myfname">
                <label>Email</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="e.g. JohnRoss@gmail.com"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div className="myfname">
                <label>Social Media</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="@JohnRoss"
                  name="socialMedia"
                  onChange={handleChange}
                />
              </div>

              <div className="myfname">
                <label>About Me</label>
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Write about yourself"
                  name="bio"
                  onChange={handleChange}
                />
              </div>

              <div className="myfname">
                <label>Current Projects</label>
                <ul>
                  <li className="plist">
                    {' '}
                    <input
                      type="URL"
                      placeholder="Project 1"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="plist">
                    {' '}
                    <input
                      type="URL"
                      placeholder="Project 2"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="plist">
                    {' '}
                    <input
                      type="URL"
                      placeholder="Project 3"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="plist">
                    {' '}
                    <input
                      type="URL"
                      placeholder="Project 4"
                      onChange={handleChange}
                    />
                  </li>
                </ul>
              </div>
              <div className="myfname">
                <label>My Music</label>
                <ul>
                  <li className="plist">
                    {' '}
                    <input
                      type="URL"
                      placeholder="Song 1"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="plist">
                    {' '}
                    <input
                      type="URL"
                      placeholder="Song 2"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="plist">
                    {' '}
                    <input
                      type="URL"
                      placeholder="Song 3"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="plist">
                    {' '}
                    <input
                      type="URL"
                      placeholder="Song 4"
                      onChange={handleChange}
                    />
                  </li>
                </ul>
              </div>
              <div className="lower">
                <button className="topbtns" onSubmit={handleEditProfile}>
                  Save
                </button>
                <button className="topbtnc">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
