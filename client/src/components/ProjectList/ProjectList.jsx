import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectCards = await axios.get('/api/projects');
        setProjects(projectCards.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, []);

  const sortStarted1 = () => {
    const array = [...projects].sort((a, b) =>
      b.projectName.localeCompare(a.projectName)
    );
    setProjects(array);
    console.log('sorted 1', projects);
  };

  const sortStarted2 = () => {
    const array = [...projects].sort((a, b) =>
      a.projectName.localeCompare(b.projectName)
    );
    setProjects(array);
    console.log('sorted 2', projects);
  };

  const sortStarted3 = () => {
    const array = projects.sort((a, b) =>
      b.projectName.localeCompare(a.projectName) ? 1 : -1
    );
    setProjects(array);
    console.log('sorted 3', projects);
  };

  return (
    <div>
      <div>
        {' '}
        <button
          style={{
            color: 'white',
            backgroundColor: 'black',
            borderRadius: '15px'
          }}
          onClick={sortStarted1}
        >
          Sort by Start Date 1
        </button>
        <button
          style={{
            color: 'white',
            backgroundColor: 'black',
            borderRadius: '15px'
          }}
          onClick={sortStarted2}
        >
          Sort by Start Date 2
        </button>
        <button
          style={{
            color: 'white',
            backgroundColor: 'black',
            borderRadius: '15px'
          }}
          onClick={sortStarted3}
        >
          Sort by Start Date 3
        </button>
      </div>
      <div>Add styling</div>
      <div id="projectCardList">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={projects._id}
              project={project}
              className="projectCards"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
