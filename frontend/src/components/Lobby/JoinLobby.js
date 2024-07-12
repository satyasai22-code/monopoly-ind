// src/components/Lobby/JoinLobby.js
import React from 'react';
import { joinGame } from '../../services/WebSocket';
import { useHistory } from 'react-router-dom';

const JoinLobby = ({ lobbies }) => {
    const history = useHistory()
    const handleJoinLobby = (lobbyId) => {
        joinGame(lobbyId);
        console.log('Joined lobby:', lobbyId);
        history.push(`/game/${lobbyId}`);
    };

    return (
        <div>
            <h3>Join a Lobby</h3>
            <ul>
                {lobbies && lobbies.map((lobby) => (
                    <li key={lobby.id}>
                        {lobby.name} - {lobby.players.length} players
                        <button onClick={() => handleJoinLobby(lobby.id)}>Join</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JoinLobby;
