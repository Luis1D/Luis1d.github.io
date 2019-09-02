import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/App.scss';

import Intro from './components/Intro';
import Nav from './components/Nav';
import Github from './components/Github';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Intro />
    <Nav />
    <Switch>
      <Route path="/" exact component={About}/>
      <Route path="/Github" exact component={Github}/>
      <Route path="/Portfolio" component={Portfolio}/>
      {/* <Route path="/Blog" component={Blog}/> */}
    </Switch>
    <Footer />
    </div>
  );
}

export default App; 