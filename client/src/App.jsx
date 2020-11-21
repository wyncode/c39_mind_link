import React from 'react';
import { AppContextProvider } from './context/AppContext';
import ArtistPage from './Pages/ArtistPage';
import Home from './Pages/HomePage';
import CollabPage from './Pages/CollabPage';
import CollabDetails from './Pages/CollabDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ResetPassword from './Pages/ResetPassword';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ArtistPage} />
          <Route exact path="/collaboration" component={CollabPage} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route
            exact
            path="/collaboration/details"
            component={CollabDetails}
          />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
