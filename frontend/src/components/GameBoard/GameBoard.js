// src/components/GameBoard/GameBoard.js
import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api';
import { onEvent } from '../../services/WebSocket';
import Dice from './Dice';
import Player from './Player';
import { GameContext } from '../../contexts/GameContext';

const GameBoard = () => {
    const { gameId, players, setPlayers, board, setBoard } = useContext(GameContext);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    useEffect(() => {
        // Fetch initial game state
        const fetchGameState = async () => {
            try {
                const response = await api.get(`/games/${gameId}`);
                setPlayers(response.data.players);
                setBoard(response.data.board);
                setCurrentPlayer(response.data.currentTurn);
            } catch (error) {
                console.error('Failed to fetch game state:', error);
            }
        };

        fetchGameState();

        // Listen for real-time game updates
        onEvent('gameUpdated', (updatedGame) => {
            setPlayers(updatedGame.players);
            setBoard(updatedGame.board);
            setCurrentPlayer(updatedGame.currentTurn);
        });
    }, [gameId, setPlayers, setBoard]);

    return (
        <div>
            <h2>Game Board</h2>
            <div className="board">
                {/* Render the game board here, e.g., properties */}
                {board.map((property, index) => (
                    <div key={index} className="property">
                        {property.name}
                    </div>
                ))}
            </div>
            <div className="players">
                {players.map((player) => (
                    <Player key={player.id} player={player} />
                ))}
            </div>
            <Dice currentPlayer={currentPlayer} />
        </div>
    );
};

export default GameBoard;
