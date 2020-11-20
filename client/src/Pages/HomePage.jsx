import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '../App.css';
import HeroSection from '../components/Home/HeroSection';
import Navbar from '../components/NavBar/Navbar';

// Need to route Navbar links to correct location

const Home = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
        </Switch>
      </Router>
    </>
  );
};

export default Home;
