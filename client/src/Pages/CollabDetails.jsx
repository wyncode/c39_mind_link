import React from 'react';
import CollabHeader from '../components/Collaborations/CollabHeader.jsx';
import CollabInfo from '../components/Collaborations/CollabInfo';
import CommentList from '../components/Collaborations/CommentList';
import '../components/Collaborations/CollabInfo.css';
import '../components/Collaborations/CollabHeader.css';
import '../components/Collaborations/CommentList.css';
import '../components/Collaborations/CommentForm.css';
import '../components/Collaborations/Comment.css';
import './CollabDetails.css';

const Collaboration = () => {
  return (
    <div>
      <div id="collabContainer1">
        <div id="collabHeader">
          <CollabHeader />
        </div>
        <div id="collabContainer2">
          <div id="collabInfo">
            {' '}
            <CollabInfo />
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
