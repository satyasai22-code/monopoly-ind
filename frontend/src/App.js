import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lobby from './components/Lobby/Lobby';
import GameBoard from './components/GameBoard/GameBoard';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/lobby" component={Lobby} />
          <Route path="/game" component={GameBoard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
