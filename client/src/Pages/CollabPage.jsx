import React from 'react';
import CollabHeader from '../components/Collaborations/CollabHeader';
import CollabInfo from '../components/Collaborations/CollabInfo';
import CollabComments from '../components/Collaborations/CollabComments';

const Collaboration = () => {
  return (
    <div>
      <CollabHeader />
      <CollabInfo />
      <CollabComments />
    </div>
  );
};

export default Collaboration;
