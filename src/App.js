import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Mint from './components/pages/Mint';
import Map from './components/pages/Map';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/mint' component={Mint} />
          <Route path='/map' component={Map} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
