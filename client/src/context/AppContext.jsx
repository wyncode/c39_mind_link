import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [collabPost, setCollabPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredComments, setFilteredComments] = useState([]);

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
        setFilteredComments
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
