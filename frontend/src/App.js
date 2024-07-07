import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import Player from './components/Player';
import GameControls from './components/GameControls';
import socket from './socket';

function App() {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    socket.connect();

    socket.on('gameState', (newGameState) => {
      setGameState(newGameState);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startGame = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/game/start', { method: 'POST' });
      const data = await response.json();
      setGameState(data.gameState);
      socket.emit('startGame', data.gameState);
    } catch (error) {
      console.error('Error starting the game:', error);
    }
  };

  const rollDice = async (playerId) => {
    try {
      const response = await fetch('http://localhost:5000/api/game/roll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId }),
      });
      const data = await response.json();
      setGameState(data.gameState);
      socket.emit('rollDice', data.gameState);
    } catch (error) {
      console.error('Error rolling the dice:', error);
    }
  };

  const buyProperty = async (playerId) => {
    try {
      const response = await fetch('http://localhost:5000/api/game/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId }),
      });
      const data = await response.json();
      setGameState(data.gameState);
      socket.emit('buyProperty', data.gameState);
    } catch (error) {
      console.error('Error buying property:', error);
    }
  };

  return (
    <div className="App">
      {!gameState &&<header className="App-header">
        <h1>Monopoly Game</h1>
        <button onClick={startGame} disabled={gameState !== null}>
          Start Game
        </button>
      </header>}
      <main className="App-main">
        {gameState && (
          <div className="game-container">
            <div className="board-container">
              <Board gameState={gameState} />
            </div>
            <div className="players-container">
              <h2>Players</h2>
              <div className="players-list">
                {gameState.players.map((player) => (
                  <Player key={player.id} player={player} rollDice={rollDice} buyProperty={buyProperty} />
                ))}
              </div>
              <GameControls gameState={gameState} rollDice={rollDice} buyProperty={buyProperty} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
