import React from 'react';
import ProjectHeader from '../Projects/ProjectHeader';
import ProjectInfo from '../Projects/ProjectInfo';
import CommentList from '../Projects/CommentList';
import '../Projects/ProjectInfo.css';
import '../Projects/ProjectHeader.css';
import '../Projects/CommentList.css';
import '../Projects/CommentForm.css';
import '../Projects/Comment.css';
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
