import React from 'react';
import CollabHeader from '../components/Collaborations/CollabHeader';
import CollabInfo from '../components/Collaborations/CollabInfo';
import CollabPostForm from '../components/Collaborations/CollabPostForm';
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
            <CollabPostForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
