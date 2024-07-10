// src/components/Lobby/Lobby.js
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { joinGame, onEvent } from '../../services/WebSocket';
import CreateLobby from './CreateLobby';
import JoinLobby from './JoinLobby';

const Lobby = () => {
    const [lobbies, setLobbies] = useState([]);

    useEffect(() => {
        // Fetch lobbies from the backend
        const fetchLobbies = async () => {
            try {
                const response = await api.get('/lobbies');
                setLobbies(response.data);
            } catch (error) {
                console.error('Failed to fetch lobbies:', error);
            }
        };

        fetchLobbies();

        // Listen for real-time updates to lobbies
        onEvent('lobbyUpdated', (updatedLobbies) => {
            setLobbies(updatedLobbies);
        });
    }, []);

    return (
        <div>
            <h2>Game Lobbies</h2>
            <CreateLobby />
            <JoinLobby lobbies={lobbies} />
        </div>
    );
};

export default Lobby;
