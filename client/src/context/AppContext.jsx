import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [project, setProject] = useState([]);
  const [collabPost, setCollabPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredComments, setFilteredComments] = useState({});
  const [commentList, setCommentList] = useState({});
  const [collabFormData, setCollabFormData] = useState({});
  const [commentData, setCommentData] = useState({});
  const user = sessionStorage.getItem('user');
  const [projectInfo, setProjectInfo] = useState([]);
  const [specificProject, setSpecificProject] = useState({});

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/api/users/me`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => {
          // swal(`Oops!`, error.toString());
          console.log(error);
        });
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        comments,
        setComments,
        collabPost,
        setCollabPost,
        loading,
        setLoading,
        search,
        setSearch,
        filteredComments,
        setFilteredComments,
        commentList,
        setCommentList,
        collabFormData,
        setCollabFormData,
        commentData,
        setCommentData,
        project,
        setProject,
        projectInfo,
        setProjectInfo,
        specificProject,
        setSpecificProject
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
