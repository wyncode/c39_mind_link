import React from 'react';
import ProjectHeader from '../components/Projects/ProjectHeader.jsx';
import ProjectInfo from '../components/Projects/ProjectInfo';
import CommentList from '../components/Projects/CommentList';
import '../components/Projects/ProjectInfo.css';
import '../components/Projects/ProjectHeader.css';
import '../components/Projects/CommentList.css';
import '../components/Projects/CommentForm.css';
import '../components/Projects/Comment.css';
import './ProjectPage.css';

const Collaboration = () => {
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

export default Collaboration;
