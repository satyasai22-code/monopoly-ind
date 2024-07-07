import React from 'react';
import './Board.css';

function Board({ gameState }) {
  return (
    <div className="board">
      {gameState.board.map((property, index) => (
        <div key={index} className={`cell ${property.type.toLowerCase()} position-${index}`}>
          <div className="cell-name">{property.name}</div>
          {property.price > 0 && <div className="cell-price">${property.price}</div>}
          {property.ownerId !== null && <div className="cell-owner">Owner: {property.ownerId}</div>}
        </div>
      ))}
    </div>
  );
}

export default Board;
