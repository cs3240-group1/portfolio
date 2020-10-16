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
              <Route path="/portfolio/" component={Home} exact/>
              <Route path="/portfolio//conception" component={Conception} />
              <Route path="/portfolio//observation" component={Observation} />
              <Route path="/portfolio//prototyping" component={Prototyping} />
              <Route path="/portfolio//evaluation" component={Evaluation} />
              <Route path="/portfolio//result" component={Result} />
          </Switch>
      </main>
  );
}

export default App;
