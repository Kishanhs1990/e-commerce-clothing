import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

import { Switch, Route } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
};

const JacketsPage = () => {
  return (
    <div>
      <h1>JacketsPage</h1>
    </div>
  );
};

const SneakersPage = () => {
  return (
    <div>
      <h1>SneakersPage</h1>
    </div>
  );
};

const WomensPage = () => {
  return (
    <div>
      <h1>WomensPage</h1>
    </div>
  );
};

const MensPage = () => {
  return (
    <div>
      <h1>MensPage</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/Jackets" component={JacketsPage} />
        <Route exact path="/sneakers" component={SneakersPage} />
        <Route exact path="/womens" component={WomensPage} />
        <Route path="/mens" component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
