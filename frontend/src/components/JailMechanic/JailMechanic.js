// src/components/JailMechanic/JailMechanic.js
import React, { useContext } from 'react';
import api from '../../services/api';
import { GameContext } from '../../contexts/GameContext';

const JailMechanic = ({ player }) => {
    const { gameId, setPlayers } = useContext(GameContext);

    const handleSkipTurn = async () => {
        try {
            const response = await api.post(`/games/${gameId}/players/${player.id}/skip-turn`);
            setPlayers(response.data.players);
        } catch (error) {
            console.error('Failed to skip turn:', error);
        }
    };

    const handlePayBail = async () => {
        try {
            const response = await api.post(`/games/${gameId}/players/${player.id}/pay-bail`);
            setPlayers(response.data.players);
        } catch (error) {
            console.error('Failed to pay bail:', error);
        }
    };

    return (
        <div className="jail-mechanic">
            <h4>{player.name} is in jail</h4>
            <button onClick={handleSkipTurn}>Skip Turn</button>
            <button onClick={handlePayBail}>Pay Bail</button>
        </div>
    );
};

export default JailMechanic;
