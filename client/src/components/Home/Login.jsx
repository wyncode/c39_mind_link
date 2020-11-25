import './Login.css';
import Navbar from '../NavBar/Navbar';
import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const Login = () => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const history = useHistory();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //we are using axios to make a request to our backend, the req be sent through/to the controller
      //formData is what is coming back to us, the .json in res line of handleSubmit
      const response = await axios.post('/api/login', formData);
      setCurrentUser(response.data);
      //setting the user storage to a name called user(key) and value of the object os the response
      sessionStorage.setItem('user', response.data);
      console.log(sessionStorage);
      history.push('/profile');
    } catch (error) {
      console.log(error);
      swal(`Oops!`, 'Something went wrong.');
    }
  };
  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="FormWrap">
          <div to="/" className="logo">
            Mind-Link
          </div>
          <div className="FormContent">
            <form className="Form" action="post" onSubmit={handleLogin}>
              <h1 className="FormH1">Login</h1>
              <label className="FormLabel" htmlFor="for">
                Artist Name
              </label>
              <input
                className="FormInput"
                type="text"
                name="artistName"
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
                Login
              </button>
              <span className="Text">Forgot Password?</span>
              <Link to="/sign-up">Need an Account? Sign up.</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
