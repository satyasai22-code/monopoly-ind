// src/components/GameBoard/GameBoard.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { joinGame, onEvent } from '../../services/WebSocket';
import api from '../../services/api';
import Dice from './Dice';
import Player from './Player';
import PropertyList from '../Property/PropertyList';
import TradeList from '../Trade/TradeList';
import FinancialDashboard from '../FinancialDashboard/FinancialDashboard';
import JailMechanic from '../JailMechanic/JailMechanic';
import Chat from '../Chat/Chat';

const GameBoard = () => {
    const { gameId } = useParams();
    const [gameStatus, setGameStatus] = useState(null);

    useEffect(() => {
        joinGame(gameId);

        const fetchGameStatus = async () => {
            try {
                const response = await api.get(`/games/${gameId}/status`);
                setGameStatus(response.data);
            } catch (error) {
                console.error('Failed to fetch game status:', error);
            }
        };

        fetchGameStatus();

        onEvent('gameStarted', (data) => {
            setGameStatus(data);
        });
        // TODO
        onEvent('diceRolled', (data) => {
            console.log('Dice rolled:', data);
        });
        //TODO
        onEvent('playerMoved', (data) => {
            console.log('Player moved:', data);
        });

    }, [gameId]);

    if (!gameStatus) {
        return <div>Loading...</div>;
    }

    return (
        <div className="game-board">
            <h2>Game Board</h2>
            <Dice />
            <div className="players">
                {gameStatus.players.map(player => (
                    <Player key={player.id} player={player} />
                ))}
            </div>
            <PropertyList />
            <TradeList />
            <FinancialDashboard />
            <JailMechanic />
            <Chat />
        </div>
    );
};

export default GameBoard;
