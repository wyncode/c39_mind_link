import React from 'react';
import './CollabCard';
import './CollabCard.css';

const CollabCard = () => {
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
        <div id="projectCardName">Project Name</div>
        <div id="projectCardDesc">Project Description</div>
        <div id="projectCardOwner">Project Owner</div>
        <div id="projectCardLink">Link to Details</div>
      </div>
    </div>
  );
};

export default CollabCard;
