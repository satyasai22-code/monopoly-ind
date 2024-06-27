import React, { useState } from 'react';
import Board from './components/Board';
import Player from './components/Player';
import GameControls from './components/GameControls';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

function App() {
  const [gameState, setGameState] = useState(null);

  const startGame = async () => {
    const response = await fetch('/api/game/start', { method: 'POST' });
    const data = await response.json();
    setGameState(data.gameState);
  };

  const rollDice = async (playerId) => {
    const response = await fetch('/api/game/roll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerId }),
    });
    const data = await response.json();
    setGameState(data.gameState);
  };

  const buyProperty = async (playerId) => {
    const response = await fetch('/api/game/buy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerId }),
    });
    const data = await response.json();
    setGameState(data.gameState);
  };

  return (
    <div className="App">
      <button onClick={startGame}>Start Game</button>
      {gameState && <Board gameState={gameState} />}
      {gameState && (
        <div>
          {gameState.players.map((player) => (
            <Player key={player.id} player={player} rollDice={rollDice} buyProperty={buyProperty} />
          ))}
        </div>
      )}
      {gameState && <GameControls gameState={gameState} />}
    </div>
  );
}

export default App;
