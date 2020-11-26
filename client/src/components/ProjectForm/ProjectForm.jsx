import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import swal from 'sweetalert';
import Navbar from '../NavBar/Navbar';
import './ProjectForm.css';

const emptyFormState = {
  projectName: '',
  projectDesc: '',
  audition: '',
  status: '',
  started: '',
  talentNeeded: '',
  genre: '',
  mood: '',
  avatar: '',
  mindLinkProfile: ''
};

const ProjectForm = () => {
  const { setLoading } = useContext(AppContext);

  const [collabFormData, setCollabFormData] = useState(emptyFormState);

  const handleChange = (field) => (evt) => {
    setCollabFormData({ ...collabFormData, [field]: evt.target.value });
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: 'api/projects',
        withCredentials: true,
        data: collabFormData
      });
      swal('New Project!', 'Your project has been added!', 'success');
      setCollabFormData(emptyFormState);
      form.reset();
    } catch (error) {
      console.log(collabFormData);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="createPojectContainer">
        <div className="FormContent">
          <form className="Form" action="#" onSubmit={handleSubmit}>
            <h1 className="FormH1">Create Your Collab Project!</h1>
            <label className="FormLabel" htmlFor="for">
              Project Name
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('projectName')}
              value={collabFormData.projectName}
            />
            <label className="FormLabel" htmlFor="for">
              Project Description
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('projectDesc')}
              value={collabFormData.projectDesc}
            />
            <label className="FormLabel" htmlFor="for">
              Audition{' '}
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('audition')}
              value={collabFormData.audition}
            />
            <label className="FormLabel" htmlFor="for">
              Status
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('status')}
              value={collabFormData.status}
            />
            <label className="FormLabel" htmlFor="for">
              Started
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('started')}
              value={collabFormData.started}
            />
            <label className="FormLabel" htmlFor="for">
              Talent Needed
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('talentNeeded')}
              value={collabFormData.talentNeeded}
            />
            <label className="FormLabel" htmlFor="for">
              Genre
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('genre')}
              value={collabFormData.genre}
            />
            <label className="FormLabel" htmlFor="for">
              Mood
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('mood')}
              value={collabFormData.mood}
            />
            <label className="FormLabel" htmlFor="for">
              Avatar
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('avatar')}
              value={collabFormData.avatar}
            />
            <label className="FormLabel" htmlFor="for">
              MindLink Profile
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('mindLinkProfile')}
              value={collabFormData.mindLinkProfile}
            />
            <button
              className="FormButton"
              type="submit"
              onSubmit={handleSubmit}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
