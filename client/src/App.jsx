import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import ProjectList from './Pages/ProjectList';
import CreateProject from './Pages/CreateProject';
import Project from './Pages/Project';
import ResetPassword from './Pages/ResetPassword';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import EditProfile from './Pages/EditProfile';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/project-list" component={ProjectList} />
          <Route exact path="/create-project" component={CreateProject} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/project-details/:id" component={Project} />
          <Route exact path="/edit-profile" component={EditProfile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
