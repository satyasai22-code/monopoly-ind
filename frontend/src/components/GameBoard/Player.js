// src/components/GameBoard/Player.js
import React from 'react';

const Player = ({ player }) => {
    return (
        <div className="player">
            <h4>{player.name}</h4>
            <p>Position: {player.position}</p>
            <p>Money: ${player.money}</p>
        </div>
    );
};

export default Player;
