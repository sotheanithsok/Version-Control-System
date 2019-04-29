import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import { Provider } from "react-redux";
import store from './statesManagement/Store';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
