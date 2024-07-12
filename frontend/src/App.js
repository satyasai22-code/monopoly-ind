// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameBoard from './components/GameBoard/GameBoard';
import Lobby from './components/Lobby/Lobby';
import { GameProvider } from './contexts/GameContext';
import './styles/App.css';

const App = () => {
    return (
        <GameProvider>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Lobby} />
                        <Route path="/game/:gameId" component={GameBoard} />
                    </Switch>
                </div>
            </Router>
        </GameProvider>
    );
};

export default App;
