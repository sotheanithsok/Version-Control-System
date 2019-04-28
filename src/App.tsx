import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <div className="App">
    <Router>
      <Switch>
         <Route path="/" exact component={Main}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
