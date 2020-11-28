import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';
import axios from 'axios';
import Navbar from '../NavBar/Navbar';

const ProjectList = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectCards = await axios.get('/api/projects');
        setProject(projectCards.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, [project]);

  return (
    <>
      <Navbar />
      <div>Add sorting feature</div>
      <div>Add findbyID to link to detail page</div>
      <div>Add styling</div>
      <div id="projectCardList">
        {project.map((project) => {
          return (
            <ProjectCard
              key={project._id}
              project={project}
              className="projectCards"
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectList;
