// src/components/Trade/Trade.js
import React, { useState, useContext } from 'react';
import api from '../../services/api';
import { GameContext } from '../../contexts/GameContext';

const Trade = ({ trade }) => {
    const { gameId, players, setPlayers } = useContext(GameContext);
    const [offer, setOffer] = useState(trade.offer);
    const [request, setRequest] = useState(trade.request);

    const handleAcceptTrade = async () => {
        try {
            const response = await api.post(`/trades/${trade.id}/accept`, { gameId });
            // Update the player's state based on the response
            setPlayers(response.data.players);
        } catch (error) {
            console.error('Failed to accept trade:', error);
        }
    };

    const handleRejectTrade = async () => {
        try {
            await api.post(`/trades/${trade.id}/reject`, { gameId });
        } catch (error) {
            console.error('Failed to reject trade:', error);
        }
    };

    return (
        <div className="trade">
            <h4>Trade Offer</h4>
            <p>Offer: {offer}</p>
            <p>Request: {request}</p>
            <button onClick={handleAcceptTrade}>Accept</button>
            <button onClick={handleRejectTrade}>Reject</button>
        </div>
    );
};

export default Trade;
