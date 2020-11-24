import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import './Signup.css';
import NavBar from '../NavBar/Navbar';

const Signup = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      console.log(response.data);
      history.push('/');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
  };

  return (
    <>
      <NavBar />
      <div className="signupContainer">
        <div className="FormWrap">
          <div className="FormContent">
            <form className="Form" action="#" onSubmit={handleSignUp}>
              <h1 className="FormH1">Create Account</h1>
              <label className="FormLabel" htmlFor="for">
                Artist Name
              </label>
              <input
                className="FormInput"
                type="name"
                name="artistName"
                required
                onChange={handleChange}
              />

              <label className="FormLabel" htmlFor="for">
                First Name
              </label>
              <input
                className="FormInput"
                type="name"
                name="firstName"
                required
                onChange={handleChange}
              />
              <label className="FormLabel" htmlFor="for">
                Last Name
              </label>
              <input
                className="FormInput"
                type="name"
                name="lastName"
                required
                onChange={handleChange}
              />
              <label className="FormLabel" htmlFor="for">
                Email
              </label>
              <input
                className="FormInput"
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
              <label className="FormLabel" htmlFor="for">
                Password
              </label>
              <input
                className="FormInput"
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
              <button className="FormButton" type="submit">
                Continue
              </button>
            </form>
            <Link className="mt-4" to="/login">
              Already have an account? Login.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
