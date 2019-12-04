import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="container">
          <header className="App-header">
              <Navigation />
          </header>
        </div>
      </div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
