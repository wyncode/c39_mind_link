import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import swal from 'sweetalert';
import Navbar from '../NavBar/Navbar';
import './ProjectForm.css';

const emptyFormState = {
  projectName: '',
  projectDescription: '',
  projectBrief: '',
  auditions: '',
  status: '',
  started: '',
  talentNeeded: '',
  genre: '',
  mood: '',
  projectAvatar: ''
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
        url: '/api/projects',
        withCredentials: true,
        data: collabFormData
      });
      swal('New Project!', 'Your project has been added!', {
        icon: 'success'
      });
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
          <form
            style={{ width: '81%' }}
            className="ProjectForm"
            action="#"
            onSubmit={handleSubmit}
          >
            <h1 className="FormH1">Create Your Collab Project!</h1>
            <label className="FormLabel" htmlFor="for">
              Project Name
            </label>
            <input
              style={{ width: '77%', marginBottom: '15px' }}
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
              style={{ width: '77%', marginBottom: '15px' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('projectDescription')}
              value={collabFormData.projectDescription}
            />
            <label className="FormLabel" htmlFor="for">
              Project Brief
            </label>
            <input
              style={{ width: '77%', marginBottom: '15px' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('projectBrief')}
              value={collabFormData.projectBrief}
            />
            <label className="FormLabel" htmlFor="for">
              Audition Date{' '}
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="date"
              onChange={handleChange('auditions')}
              value={collabFormData.auditions}
            />
            <label className="FormLabel" htmlFor="for">
              Start Date
            </label>
            <input
              style={{ width: '100%' }}
              className="FormInput"
              required
              type="date"
              onChange={handleChange('started')}
              value={collabFormData.started}
            />
            <label className="FormLabel" htmlFor="for">
              Talent Needed
            </label>
            <input
              style={{ width: '77%', marginBottom: '15px' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('talentNeeded')}
              value={collabFormData.talentNeeded}
            />
            <label className="FormLabel" htmlFor="for">
              Genre
            </label>
            <select
              style={{ width: '100%' }}
              className="FormInput"
              onChange={handleChange('genre')}
              value={collabFormData.genre}
            >
              {[
                'Classical',
                'Country',
                'EDM',
                'Hip-hop',
                'Indie rock',
                'Jazz',
                'K-pop',
                'Metal',
                'Oldies',
                'Pop',
                'Rap',
                'R&B',
                'Rock',
                'Techno'
              ].map((genre) => (
                <option key={genre}>{genre}</option>
              ))}
            </select>
            <label className="FormLabel" htmlFor="for">
              Mood
            </label>
            <input
              style={{ width: '77%', marginBottom: '15px' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('mood')}
              value={collabFormData.mood}
            />
            <label className="FormLabel" htmlFor="for">
              Project Image
            </label>
            <input
              style={{ width: '77%', marginBottom: '15px' }}
              className="FormInput"
              required
              type="text"
              onChange={handleChange('projectAvatar')}
              value={collabFormData.projectAvatar}
            />
            <button
              style={{ width: '31%' }}
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
