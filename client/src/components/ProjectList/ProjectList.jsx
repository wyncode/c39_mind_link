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


  return (
    <div id="projectListContainer">
      <h2 id="plHeader">
        It's time to SPARK magic and join your next collaboration!
      </h2>
      <div id="listHeader">
        <img
          className="listImage"
          src={
            'https://online.berklee.edu/takenote/wp-content/uploads/2020/05/courses_for_creation_and_collaboration_article_image.jpg'
          }
          alt="Collaborating"
        />

        <div id="listTextContainer">
          <p id="p1" className="listText">
            Start or join a collaboration project Whether it's a guitar riff,
            drum loop, a vocal a cappella or lyrics - just start your own music
            collaboration project and upload your idea. Then, wait for others to
            join in, or send invites to other members. You can also jump in on
            any other open project by uploading your idea as an audition.
          </p>
          <p id="p2" className="listText">
            On MindLink, your collaborators may be located in different
            countries and therefore will be waking, working, eating, writing,
            recording, and sleeping at different times of the day. MindLink
            allows members to upload and manage their work in a collaborative
            project environment where others can later upload and download
            tracks and work on them at their own convenience, at any time of the
            day or night.
          </p>
        </div>
      </div>
      <div>
        {' '}
        <button className="sortButton" onClick={sortStarted1}>
          Projects Starting Soon
        </button>
        <button className="sortButton" onClick={sortStarted2}>
          Project Starting Much Later
        </button>
      </div>
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
