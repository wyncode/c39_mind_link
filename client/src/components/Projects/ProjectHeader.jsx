import React from 'react';

const ProjectHeader = () => {
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
          <p id="pName">Project Name</p>
          <p id="pDesc">Project Description</p>
          <p id="descFromDB">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
