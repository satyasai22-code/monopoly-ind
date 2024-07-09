import React, { useEffect, useState } from 'react';
import { joinGame, onEvent } from '../../services/WebSocket';
import { useParams } from 'react-router-dom';

const GameBoard = () => {
    const { gameId } = useParams();
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        joinGame(gameId);

        onEvent('gameStarted', (game) => {
            setGameState(game);
        });

        onEvent('diceRolled', (data) => {
            // Update game state based on dice roll
        });

        onEvent('playerMoved', (game) => {
            setGameState(game);
        });

        onEvent('propertyBought', (game) => {
            setGameState(game);
        });

        onEvent('rentPaid', (game) => {
            setGameState(game);
        });

        onEvent('tradeProposed', (trade) => {
            // Handle trade proposal
        });

        onEvent('tradeAccepted', (trade) => {
            // Handle trade acceptance
        });

        onEvent('tradeRejected', (trade) => {
            // Handle trade rejection
        });

        onEvent('newMessage', (message) => {
            // Handle new chat message
        });

    }, [gameId]);

    return (
        <div>
            {/* Render game board based on gameState */}
        </div>
    );
};

export default GameBoard;
