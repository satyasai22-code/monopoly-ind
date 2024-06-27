import React from 'react';

function GameControls({ gameState }) {
  return (
    <div>
      <h2>Game Controls</h2>
      <p>Current Player: {gameState.players[gameState.currentPlayerIndex].name}</p>
    </div>
  );
}

export default GameControls;
