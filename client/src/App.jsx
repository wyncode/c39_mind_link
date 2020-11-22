import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import ProjectList from './Pages/ProjectList';
import CreateProject from './Pages/CreateProject';
import Project from './Pages/Project';
import ResetPassword from './Pages/ResetPassword';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/project-list" component={ProjectList} />
          <Route exact path="/create-project" component={CreateProject} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/project-details" component={Project} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
