import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const CollabInfo = () => {
  const { collabPost, setCollabPost } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/collaboration')
      .then((response) => {
        setCollabPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [collabPost, setCollabPost]);
  console.log(collabPost);
  return (
    <div>
      <div className="infoBox">
        <div className="iBoxHeader">Project</div>
        <div className="iBoxContent">
          <p posts={collabPost}>Auditions:</p>
          <p>Status:</p>
          <p>Started:</p>
        </div>
      </div>
    </div>
  );
};

export default CollabInfo;
