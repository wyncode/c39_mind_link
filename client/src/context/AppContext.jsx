import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [comment, setComment] = useState([]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        comment,
        setComment
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
