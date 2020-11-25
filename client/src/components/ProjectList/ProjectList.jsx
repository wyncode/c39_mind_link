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
        console.log(project);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, [project]);

  return (
    <div id="projectCardList">
      {project.map((project) => {
        return <ProjectCard project={project} className="projectCards" />;
      })}
    </div>
  );
};

export default ProjectList;
