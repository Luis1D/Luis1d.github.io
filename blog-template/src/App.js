import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/App.scss';

// import Intro from './components/Intro';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import About from './components/About';

function App() {
  return (
    <div className="App">
    <Nav />
    {/* <div className="social-container">
      <a href="https://www.instagram.com/code.with.luis/"><img src={require("./assets/instagram.svg")} alt="Instagram" className="social-icon" /></a>
      <a href="https://github.com/Luis1D"><img src={require("./assets/github.svg")} alt="github" className="social-icon" /></a>
      <a href="https://twitter.com/CodeWithLuis"><img src={require("./assets/twitter.svg")} alt="twitter" className="social-icon" /></a>
    </div> */}
    <Switch>
      <Route path="/" exact component={About}/>
      <Route path="/Portfolio" component={Portfolio}/>
    </Switch>
    </div>
  );
}

export default App; 