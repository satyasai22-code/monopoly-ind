import React from 'react';
import Dice from './Dice';
import './Player.css';

function Player({ player, rollDice, buyProperty }) {
  return (
    <div>
      <h2>{player.name}</h2>
      <p>Position: {player.position}</p>
      <p>Money: ${player.money}</p>
      <Dice roll={() => rollDice(player.id)} />
      {player.canBuy && <button onClick={() => buyProperty(player.id)}>Buy Property</button>}
    </div>
  );
}

export default Player;
