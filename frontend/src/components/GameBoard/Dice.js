// src/components/GameBoard/Dice.js
import React, { useState } from 'react';
import api from '../../services/api';

const Dice = ({ currentPlayer }) => {
    const [diceResult, setDiceResult] = useState(null);

    const handleRollDice = async () => {
        try {
            const response = await api.post(`/games/${currentPlayer.gameId}/roll-dice`);
            setDiceResult(response.data.diceRoll);
        } catch (error) {
            console.error('Failed to roll dice:', error);
        }
    };

    return (
        <div>
            <h3>Dice Roll</h3>
            <button onClick={handleRollDice}>Roll Dice</button>
            {diceResult !== null && <p>Dice Result: {diceResult}</p>}
        </div>
    );
};

export default Dice;
