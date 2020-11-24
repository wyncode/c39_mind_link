import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
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
  }, []);

  return (
    <div>
      {project.map((project) => {
        return <ProjectCard projectcard={project} />;
      })}
    </div>
  );
};

export default ProjectList;
