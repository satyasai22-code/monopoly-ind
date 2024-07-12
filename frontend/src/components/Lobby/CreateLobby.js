// src/components/Lobby/CreateLobby.js
import React, { useState } from 'react';
import api from '../../services/api';

const CreateLobby = () => {
    const [lobbyName, setLobbyName] = useState('');

    const handleCreateLobby = async () => {
        if(!lobbyName) return;
        try {
            const response = await api.post('/lobbies', { name: lobbyName });
            console.log('Lobby created:', response.data);
            setLobbyName('');
        } catch (error) {
            console.error('Failed to create lobby:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={lobbyName}
                onChange={(e) => setLobbyName(e.target.value)}
                placeholder="Lobby Name"
            />
            <button onClick={handleCreateLobby}>Create Lobby</button>
        </div>
    );
};

export default CreateLobby;
