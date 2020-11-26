import React from 'react';
import './ProjectHeader.css';

const ProjectHeader = ({ specProject }) => {
  return (
    <div id="headerTop">
      <div id="picAndInfoContainer">
        <div id="picContainer">
          <img
            id="projectPic"
            src={
              specProject.projectAvatar
                ? specProject.projectAvatar
                : 'https://files.willkennedy.dev/wyncode/wyncode.png'
            }
            alt="Project"
          />
        </div>
        <div id="infoContainer">
          <p id="pName">{specProject.projectName}</p>
          <p id="pDesc">{specProject.projectDescription}</p>
          <p id="descFromDB">{specProject.projectBrief}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
