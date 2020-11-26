import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = ({ specProject }) => {
  return (
    <div>
      <div className="infoBox">
        <div className="iBoxHeader">{specProject.projectName}</div>
        <div className="iBoxContent">
          <p>Auditions: {specProject.auditions}</p>
          <p>Status: {specProject.status}</p>
          <p>Started: {specProject.started}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
