import React from 'react';
import './ProjectHeader.css';

const ProjectHeader = ({ project }) => {
  return (
    <div id="headerTop">
      <div id="picAndInfoContainer">
        <div id="picContainer">
          <img
            id="projectPic"
            src={
              'https://edublog.soundtrap.com/wp-content/uploads/2017/10/Screen-Shot-2017-10-31-at-9.57.20-AM-732x380.png'
            }
            alt="Project"
          />
        </div>
        <div id="infoContainer">
          <p id="pName">{project.projectName}</p>
          <p id="pDesc">{project.projectDescription}</p>
          <p id="descFromDB">{project.projectBrief}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
