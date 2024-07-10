// src/components/Property/Property.js
import React, { useContext, useState } from 'react';
import api from '../../services/api';
import { GameContext } from '../../contexts/GameContext';

const Property = ({ property }) => {
    const { gameId, players, setPlayers } = useContext(GameContext);
    const [isOwned, setIsOwned] = useState(property.owner !== null);
    const [owner, setOwner] = useState(property.owner);

    const handlePurchase = async () => {
        try {
            const response = await api.post(`/properties/${property.id}/purchase`, { gameId });
            setIsOwned(true);
            setOwner(response.data.owner);
            // Update the player's state
            const updatedPlayers = players.map(player => 
                player.id === response.data.owner.id ? response.data.owner : player
            );
            setPlayers(updatedPlayers);
        } catch (error) {
            console.error('Failed to purchase property:', error);
        }
    };

    const handlePayRent = async () => {
        try {
            const response = await api.post(`/properties/${property.id}/pay-rent`, { gameId });
            // Update the player's state
            const updatedPlayers = players.map(player => 
                player.id === response.data.player.id ? response.data.player : player
            );
            setPlayers(updatedPlayers);
        } catch (error) {
            console.error('Failed to pay rent:', error);
        }
    };

    return (
        <div className="property">
            <h4>{property.name}</h4>
            <p>Price: ${property.price}</p>
            <p>Rent: ${property.rent}</p>
            {isOwned ? (
                <p>Owner: {owner.name}</p>
            ) : (
                <button onClick={handlePurchase}>Purchase</button>
            )}
            {isOwned && <button onClick={handlePayRent}>Pay Rent</button>}
        </div>
    );
};

export default Property;
