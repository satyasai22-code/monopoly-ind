import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateLobby from './CreateLobby';
import JoinLobby from './JoinLobby';

const Lobby = () => {
  const [lobbies, setLobbies] = useState([]);

  useEffect(() => {
    const fetchLobbies = async () => {
      const result = await axios.get('/api/lobbies');
      setLobbies(result.data);
    };
    fetchLobbies();
  }, []);

  return (
    <div>
      <h1>Game Lobbies</h1>
      <CreateLobby />
      <JoinLobby lobbies={lobbies} />
      <ul>
        {lobbies.map(lobby => (
          <li key={lobby.id}>{lobby.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lobby;
