import React from 'react';

function Board({ gameState }) {
  return (
    <div className="board">
      {gameState.board.map((tile, index) => (
        <div key={index} className="tile">
          {tile ? tile.name : index}
        </div>
      ))}
    </div>
  );
}

export default Board;
