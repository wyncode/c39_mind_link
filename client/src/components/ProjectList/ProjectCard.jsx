import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div id="projectCardContainer">
        <div id="projectCardImg">
          <img
            id="projectCardAvatar"
            src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
            alt="avatar"
          />
        </div>
        <div id="projectCardName" key={project._id}>
          {project.projectName}
        </div>
        <div id="projectCardDesc">Project Description</div>
        <div id="projectCardOwner">Project Owner</div>
        <div id="projectCardLink">Link to Details</div>
      </div>
    </div>
  );
};

export default ProjectCard;
