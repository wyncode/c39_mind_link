import React from 'react';
import { AppContextProvider } from './context/AppContext';
import ArtistPage from './Pages/ArtistPage';
import Home from './Pages/HomePage';
import CollabPage from './Pages/CollabPage';
import CreateCollabPage from './Pages/CreateCollabPage';
import ProjectPage from './Pages/ProjectPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
import ResetPassword from './Pages/ResetPassword';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/api/users/profile" component={ArtistPage} />
          <Route exact path="/api/users/collaboration" component={CollabPage} />
          <Route
            exact
            path="/api/users/createproject"
            component={CreateCollabPage}
          />
          <Route exact path="api/resetpassword" component={ResetPassword} />
          <Route
            exact
            path="/api/users/collaboration/details"
            component={ProjectPage}
          />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
