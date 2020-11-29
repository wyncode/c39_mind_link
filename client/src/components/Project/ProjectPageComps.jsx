import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProjectHeader from './ProjectHeader';
import ProjectInfo from './ProjectInfo';
import CommentList from './CommentList';
import './ProjectPageComps.css';

const ProjectPageComps = () => {
  const [specificProject, setSpecificProject] = useState({});
  // const [comments, setComments] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const fetchSpecificProjects = async () => {
      try {
        const projectDetails = await axios.get(`/api/projects/project/${id}`);
        setSpecificProject(projectDetails.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchSpecificProjects();

    // const fetchComments = async () => {
    //   try {
    //     const projectComments = await axios.get(
    //       `/api/projects/project/${id}/comments`
    //     );
    //     setComments(projectComments.data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // fetchComments();
  }, [id]);

  return (
    <div>
      <div id="collabContainer1">
        <div id="collabHeader">
          <ProjectHeader specProject={specificProject} />
        </div>
        <div id="collabContainer2">
          <div id="collabInfo">
            {' '}
            <ProjectInfo specProject={specificProject} />
          </div>
          <div id="collabComments">
            <CommentList specProject={specificProject} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageComps;
