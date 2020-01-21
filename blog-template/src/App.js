import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/App.scss';

import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import About from './components/About';

function App() {
  return (
    <div className="App">
    <Nav />
    <Switch>
      <Route path="/" exact component={About}/>
      <Route path="/Portfolio" component={Portfolio}/>
    </Switch>
    </div>
  );
}

export default App; 