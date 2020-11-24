import React, { useEffect, useState } from 'react';
// import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import ProjectHeader from './ProjectHeader';
import ProjectInfo from './ProjectInfo';
import CommentList from './CommentList';
import './ProjectPageComps.css';

// const { project, setProject } = useContext(AppContext);

const ProjectPageComps = () => {
  const [project, setProject] = useState({});
  useEffect(() => {
    axios
      .get('/api/projects')
      .then((response) => {
        setProject(response.data);
        // console.log(project);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div id="collabContainer1">
        <div id="collabHeader">
          <ProjectHeader project={project} />
        </div>
        <div id="collabContainer2">
          <div id="collabInfo">
            {' '}
            <ProjectInfo project={project} />
          </div>
          <div id="collabComments">
            <CommentList project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageComps;
