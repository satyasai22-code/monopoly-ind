// src/components/Trade/TradeList.js
import React, { useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { GameContext } from '../../contexts/GameContext';
import Trade from './Trade';

const TradeList = () => {
    const { gameId } = useContext(GameContext);
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const response = await api.get(`/games/${gameId}/trades`);
                setTrades(response.data.trades);
            } catch (error) {
                console.error('Failed to fetch trades:', error);
            }
        };

        fetchTrades();

        // Listen for real-time trade updates
        onEvent('tradeUpdated', (updatedTrades) => {
            setTrades(updatedTrades);
        });
    }, [gameId]);

    return (
        <div className="trade-list">
            <h3>Trades</h3>
            {trades.map(trade => (
                <Trade key={trade.id} trade={trade} />
            ))}
        </div>
    );
};

export default TradeList;
