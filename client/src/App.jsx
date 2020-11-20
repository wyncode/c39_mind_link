import React from 'react';
import { AppContextProvider } from './context/AppContext';
import ArtistPage from './Pages/ArtistPage';
import Home from './Pages/HomePage';
import CollabPage from './Pages/CollabPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={ArtistPage} />
          <Route exact path="/collaboration" component={CollabPage} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
