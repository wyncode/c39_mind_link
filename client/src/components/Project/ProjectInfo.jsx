import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = ({ specProject }) => {
  return (
    <div>
      <div className="infoBox">
        <div className="iBoxHeader iBoxContent">{specProject.projectName}</div>
        <div className="iBoxContentContainer">
          <p className="iBoxContent">Auditions: {specProject.auditions}</p>
          <p className="iBoxContent">Status: {specProject.status}</p>
          <p className="iBoxContent">Started: {specProject.started}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
