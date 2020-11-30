import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div id="projectCardContainer">
        <div id="projectCardImg">
          <img
            id="projectCardAvatar"
            src={
              project.projectAvatar
                ? project.projectAvatar
                : 'https://files.willkennedy.dev/wyncode/wyncode.png'
            }
            alt="avatar"
          />
        </div>
        <div id="projectCardName">{project.projectName}</div>
        <div id="projectCardDesc">{project.projectDescription}</div>
        {/* <div id="projectCardOwner">
          <Link to={`./profile/${project.mindlinkProfile}`}>
            MindLink Owner
          </Link>
        </div> */}
        <div id="projectCardLink">
          <Link to={`./project-details/${project._id}`}>Project Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
