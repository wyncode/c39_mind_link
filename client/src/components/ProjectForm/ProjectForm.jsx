import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

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
        url: '/api/projects',
        data: collabFormData
      });
      setCollabFormData(emptyFormState);
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signupContainer">
        <div className="FormWrap">
          <div to="/" className="logo">
            Mind-Link
          </div>
          <div className="FormContent">
            <form className="Form" action="#" onSubmit={handleSubmit}>
              <h1 className="FormH1">Create Your Collab Project!</h1>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Project Name
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Project Name"
                  onChange={handleChange('projectName')}
                  value={collabFormData.projectName}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Project Description
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Project Description"
                  onChange={handleChange('projectDesc')}
                  value={collabFormData.projectDesc}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Audition{' '}
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Audition"
                  onChange={handleChange('audition')}
                  value={collabFormData.audition}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Status
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Status"
                  onChange={handleChange('status')}
                  value={collabFormData.status}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Started
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Started"
                  onChange={handleChange('started')}
                  value={collabFormData.started}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Talent Needed
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Talent Needed"
                  onChange={handleChange('talentNeeded')}
                  value={collabFormData.talentNeeded}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Genre
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Genre"
                  onChange={handleChange('genre')}
                  value={collabFormData.genre}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Mood
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Mood"
                  onChange={handleChange('mood')}
                  value={collabFormData.mood}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  Avatar
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="Upload pic"
                  onChange={handleChange('avatar')}
                  value={collabFormData.avatar}
                />
              </div>
              <div className="form-group">
                <label className="FormLabel" htmlFor="for">
                  MindLink Profile
                </label>
                <input
                  className="FormInput"
                  required
                  type="text"
                  placeholder="MindLink Profile url"
                  onChange={handleChange('mindLinkProfile')}
                  value={collabFormData.mindLinkProfile}
                />
              </div>
              <div>
                <button type="submit" onSubmit={handleSubmit}>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
