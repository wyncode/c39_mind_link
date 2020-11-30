import React, { useState, useContext, useEffect } from 'react';
import NavBar from '../NavBar/Navbar';
import './EditProfile.css';
import { AppContext } from '../../context/AppContext';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const EditProfile = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState('');
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (currentUser && formData) {
      const {
        firstName,
        lastName,
        socialMedia,
        email,
        bio,
        artistName,
        currentProjectOne,
        currentProjectTwo,
        currentProjectThree,
        currentProjectFour,
        myMusicOne,
        myMusicTwo,
        myMusicThree,
        myMusicFour
      } = currentUser;
      setFormData({
        ...formData,
        firstName,
        lastName,
        socialMedia,
        email,
        bio,
        artistName,
        currentProjectOne,
        currentProjectTwo,
        currentProjectThree,
        currentProjectFour,
        myMusicOne,
        myMusicTwo,
        myMusicThree,
        myMusicFour
      });
    }
  }, [currentUser, formData]);

  const handleAvatar = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      swal('Sweet!', 'Your image has been updated!', 'success');
    } catch (error) {
      console.log(error);
      swal('Error', 'Oops, something went wrong.');
    }
  };

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
      console.log('running');
      console.log(error);
      swal('Ohoh! Something went wrong! ', error.toString());
    }
  };

  const handleDelete = async () => {
    try {
      const willDelete = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this account!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      });
      if (willDelete) {
        try {
          await axios({
            method: 'DELETE',
            url: '/api/users',
            withCredentials: true
          });
          swal('Poof! Your account has been deleted!', {
            icon: 'success'
          });
          sessionStorage.removeItem('user');
          setCurrentUser(null);
          history.push('/');
        } catch (error) {
          swal(`Oops!`, 'Something went wrong.');
        }
      } else {
        swal('Your account is safe!');
      }
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
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
                src={
                  preview ||
                  currentUser?.avatar ||
                  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                }
              />
            </li>
            <li>
              <form onSubmit={handleAvatar}>
                <input
                  type="file"
                  accept="image/*"
                  className="Resetbtn"
                  onChange={handleImageSelect}
                />
                <br />
                <button className="Resetbtn" type="submit">
                  Update Avatar
                </button>
              </form>
            </li>
            <li>
              <button type="submit" className="Resetbtn">
                Reset Password
              </button>
            </li>
            <li>
              <button
                type="submit"
                className="Deletebtn"
                onClick={handleDelete}
              >
                Delete Account
              </button>
            </li>
          </ul>
        </div>

        <div className="rightside">
          <div className="topdiv">
            <h1 className="basicinfo">Basic Info</h1>
            <button className="topbtns" onClick={handleEditProfile}>
              Save
            </button>
            <Link to="/profile">
              <button className="topbtnc">Cancel</button>
            </Link>
          </div>
          <div className="ruly">
            <div className="myfname">
              <label>Artist Name</label>
            </div>
            <div>
              <input
                value={formData?.artistName}
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
                value={formData?.firstName}
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
                value={formData?.lastName}
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
                value={formData?.email}
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
                value={formData.socialMedia}
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
                value={formData.bio}
                type="text"
                placeholder="Write about yourself"
                name="bio"
                className="aboutme"
                maxLength="500"
                onChange={handleChange}
              />
            </div>

            <div className="myfname">
              <label>Current Projects</label>
              <ul>
                <li className="plist">
                  {' '}
                  <input
                    name="currentProjectOne"
                    value={formData?.currentProjectOne}
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
                    value={formData?.myMusicOne}
                    name="myMusic"
                    type="URL"
                    placeholder="Song 1"
                    onChange={handleChange}
                  />
                </li>
                <li className="plist">
                  {' '}
                  <input
                    value={formData?.myMusicTwo}
                    name="myMusic"
                    type="URL"
                    placeholder="Song 2"
                    onChange={handleChange}
                  />
                </li>
                <li className="plist">
                  {' '}
                  <input
                    value={formData?.myMusicThree}
                    name="myMusic"
                    type="URL"
                    placeholder="Song 3"
                    onChange={handleChange}
                  />
                </li>
                <li className="plist">
                  {' '}
                  <input
                    value={formData?.myMusicFour}
                    name="myMusic"
                    type="URL"
                    placeholder="Song 4"
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </div>
            <div className="lower"></div>
          </div>
          <button className="topbtns" onClick={handleEditProfile}>
            Save
          </button>
          <Link to="/profile">
            <button className="topbtnc">Cancel</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

//adding this for the push
