import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = ({ specProject }) => {
  return (
    <div>
      <div className="infoBox">
        <div
          className="iBoxHeader iBoxContent"
          style={{ fontSize: '20px', marginBottom: '20px' }}
        >
          Project Info
        </div>
        <div className="iBoxContentContainer">
          <p className="iBoxContent">Audition Date:</p>
          <p
            className="iBoxContent"
            style={{ fontSize: '20px', marginBottom: '15px' }}
          >
            {specProject.auditions}
          </p>
          <p className="iBoxContent">Status:</p>
          <p
            className="iBoxContent"
            style={{ fontSize: '20px', marginBottom: '15px' }}
          >
            {' '}
            {specProject.status}
          </p>
          <p className="iBoxContent">Start Date:</p>
          <p
            className="iBoxContent"
            style={{ fontSize: '20px', marginBottom: '15px' }}
          >
            {' '}
            {specProject.started}
          </p>
          <p className="iBoxContent">Talent Needed:</p>
          <p
            className="iBoxContent"
            style={{ fontSize: '20px', marginBottom: '15px' }}
          >
            {' '}
            {specProject.talentNeeded}
          </p>
          <p className="iBoxContent">Genre:</p>
          <p
            className="iBoxContent"
            style={{ fontSize: '20px', marginBottom: '15px' }}
          >
            {' '}
            {specProject.genre}
          </p>
          <p className="iBoxContent">Mood:</p>
          <p
            className="iBoxContent"
            style={{ fontSize: '20px', marginBottom: '15px' }}
          >
            {' '}
            {specProject.mood}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
