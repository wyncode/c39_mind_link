import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';
import axios from 'axios';

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
    <div>
      <div>Add sorting feature</div>
      <div>Add findbyID to link to detail page</div>
      <div>Add styling</div>
      <div id="projectCardList">
        {project.map((project) => {
          return <ProjectCard project={project} className="projectCards" />;
        })}
      </div>
    </div>
  );
};

export default ProjectList;
