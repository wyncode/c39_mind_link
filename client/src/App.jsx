import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';
import ArtistPage from './Pages/ArtistPage';
import Home from './Pages/HomePage';
import CollabPage from './Pages/CollabPage';
import CollabDetails from './Pages/CollabDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  // const [serverMessage, setServerMessage] = useState('');

  // const fetchDemoData = () => {
  //   fetch('/api/demo')
  //     .then((response) => response.json())
  //     .then((data) => setServerMessage(data.message));
  // };

  // useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={ArtistPage} />
          <Route exact path="/collaboration" component={CollabPage} />
          <Route
            exact
            path="/collaboration/details"
            component={CollabDetails}
          />
          {/* <div id="demo">
            <h3>Hello from client/src/App.js</h3>
            <ContextDemo />
            <h3>{serverMessage}</h3>
          </div> */}
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
