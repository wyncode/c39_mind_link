import React, { useEffect, useState } from 'react';
import CollabCard from './CollabCard';
import axios from 'axios';

const CollabCardList = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let projectCards = await axios.get('/api/users/collaboration');
        setProject(projectCards.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, [project, setProject]);
  console.log(project);

  return (
    <div>
      {project &&
        project.map((projectcard) => {
          return (
            <CollabCard
              key={projectcard._id}
              id={projectcard._id}
              image={projectcard.projectAvatar}
              name={projectcard.projectName}
              description={projectcard.projectDescription}
              owner={projectcard.owner}
              link={projectcard.link}
            />
          );
        })}
    </div>
  );
};

export default CollabCardList;
