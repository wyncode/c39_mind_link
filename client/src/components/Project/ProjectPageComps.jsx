import React from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectInfo from './ProjectInfo';
import CommentList from './CommentList';
import './ProjectPageComps.css';

const ProjectPageComps = () => {
  return (
    <div>
      <div id="collabContainer1">
        <div id="collabHeader">
          <ProjectHeader />
        </div>
        <div id="collabContainer2">
          <div id="collabInfo">
            {' '}
            <ProjectInfo />
          </div>
          <div id="collabComments">
            <CommentList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageComps;
