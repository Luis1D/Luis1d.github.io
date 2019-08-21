import React from 'react';
import './scss/App.scss';

import Intro from './components/Intro';
import Nav from './components/Nav';
import Github from './components/Github';
import Personal from './components/Personal';
import Blog from './components/Blog';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Intro />
    <Nav />
    <Switch>
      <Route path="/Github" exact component={Github}/>
      <Route path="/Personal" component={Personal}/>
      <Route path="/Blog" component={Blog}/>
    </Switch>
    </div>
  );
}

export default App; 