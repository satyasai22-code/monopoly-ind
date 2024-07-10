// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lobby from './components/Lobby/Lobby';
import GameBoard from './components/GameBoard/GameBoard';
import { GameProvider } from './contexts/GameContext';

const App = () => {
    return (
        <GameProvider>
            <Router>
                <div>
                    <Switch>
                        <Route path="/lobby" component={Lobby} />
                        <Route path="/game/:gameId" component={GameBoard} />
                    </Switch>
                </div>
            </Router>
        </GameProvider>
    );
};

export default App;
