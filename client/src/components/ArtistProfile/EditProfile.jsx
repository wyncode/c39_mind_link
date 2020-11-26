import './EditProfile.css';
import NavBar from '../NavBar/Navbar';
import { AppContext } from '../../context/AppContext';
import React, { useState, useContext } from 'react';
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
      <div className="FullPage">
        <div className="rightside">
          <form action="/action_page.php" onSubmit={handleEditProfile}>
            <h1 className="EditTitle">Edit Profile</h1>
            <label className="title">Artist Name</label>
            <input type="text" name="artistName" onChange={handleChange} />

            <label className="title">First Name</label>
            <input type="text" name="firstName" onChange={handleChange} />

            <label className="title">Last Name</label>
            <input type="text" name="lastName" onChange={handleChange} />

            <label className="title">Email</label>
            <input type="text" name="email" onChange={handleChange} />

            <label className="title">Social Media</label>
            <input type="text" onChange={handleChange} />

            <label className="title">Bio</label>
            <textarea type="text" col="10" row="10" onChange={handleChange} />

            <label className="title">Projects</label>
            <ul>
              <li>
                <input
                  type="url"
                  placeholder="Upload URL Here"
                  onChange={handleChange}
                ></input>
              </li>
              <li>
                <input
                  type="url"
                  placeholder="Upload URL Here"
                  onChange={handleChange}
                ></input>
              </li>
              <li>
                <input
                  type="url"
                  placeholder="Upload URL Here"
                  onChange={handleChange}
                ></input>
              </li>
              <li>
                <input
                  type="url"
                  placeholder="Upload URL Here"
                  onChange={handleChange}
                ></input>
              </li>
              <li>
                <input
                  type="url"
                  placeholder="Upload URL Here"
                  onChange={handleChange}
                ></input>
              </li>
            </ul>
            <button
              type="submit"
              className="Savebtn"
              onSubmit={handleEditProfile}
            >
              Save
            </button>
          </form>
        </div>
        <ul className="leftside">
          <li>
            <img
              alt="User"
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
            {/* <button type="submit" className="Savebtn" onSubmit={handleEditProfile}>
              Save
            </button> */}
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
