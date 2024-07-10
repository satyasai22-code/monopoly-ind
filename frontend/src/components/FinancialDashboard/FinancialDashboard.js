// src/components/FinancialDashboard/FinancialDashboard.js
import React, { useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { onEvent } from '../../services/WebSocket';
import { GameContext } from '../../contexts/GameContext';

const FinancialDashboard = () => {
    const { gameId, players, setPlayers } = useContext(GameContext);
    const [balances, setBalances] = useState([]);

    useEffect(() => {
        const fetchBalances = async () => {
            try {
                const response = await api.get(`/games/${gameId}/balances`);
                setBalances(response.data.balances);
            } catch (error) {
                console.error('Failed to fetch balances:', error);
            }
        };

        fetchBalances();

        // Listen for real-time balance updates
        onEvent('balancesUpdated', (updatedBalances) => {
            setBalances(updatedBalances);
        });
    }, [gameId]);

    return (
        <div className="financial-dashboard">
            <h3>Financial Dashboard</h3>
            <ul>
                {balances.map((balance) => (
                    <li key={balance.playerId}>
                        {players.find((p) => p.id === balance.playerId).name}: ${balance.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FinancialDashboard;
