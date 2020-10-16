import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Conception from './pages/Conception';
import Observation from './pages/Observation';
import Prototyping from './pages/Prototyping';
import Evaluation from './pages/Evaluation';
import Result from './pages/Result';

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/conception" component={Conception} exact/>
              <Route path="/observation" component={Observation} exact/>
              <Route path="/prototyping" component={Prototyping} exact/>
              <Route path="/evaluation" component={Evaluation} exact/>
              <Route path="/result" component={Result} exact/>
          </Switch>
      </main>
  );
}

export default App;
