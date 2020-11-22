import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import './ProjectInfo.css';

const ProjectInfo = () => {
  const { collabPost, setCollabPost } = useContext(AppContext);

  useEffect(() => {
    // this route does not exist yet
    // but will be created with a follow up PR
    axios
      .get('/api/projects/:id')
      .then((response) => {
        setCollabPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

export default ProjectInfo;
