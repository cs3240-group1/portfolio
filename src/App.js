import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Conception from './pages/Conception';
import Userstudy from './pages/Userstudy';
import Prototyping from './pages/Prototyping';
import Evaluation from './pages/Evaluation';
import Result from './pages/Result';
import AboutUs from "./pages/AboutUs";

function App() {
  return (
      <main>
          <Switch>
              <Route path="/portfolio" component={Home} exact/>
              <Route path="/portfolio/conception" component={Conception} exact/>
              <Route path="/portfolio/userstudy" component={Userstudy} exact/>
              <Route path="/portfolio/prototyping" component={Prototyping} exact/>
              <Route path="/portfolio/evaluation" component={Evaluation} exact/>
              <Route path="/portfolio/result" component={Result} exact/>
              <Route path="/portfolio/aboutus" component={AboutUs} exact />
          </Switch>
      </main>
  );
}

export default App;
