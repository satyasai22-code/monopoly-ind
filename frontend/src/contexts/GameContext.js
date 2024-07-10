// src/contexts/GameContext.js
import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [gameId, setGameId] = useState(null);
    const [players, setPlayers] = useState([]);
    const [board, setBoard] = useState([]);

    return (
        <GameContext.Provider value={{ gameId, setGameId, players, setPlayers, board, setBoard }}>
            {children}
        </GameContext.Provider>
    );
};
