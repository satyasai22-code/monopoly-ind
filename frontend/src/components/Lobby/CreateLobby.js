import React, { useState } from 'react';
import axios from 'axios';

const CreateLobby = () => {
  const [name, setName] = useState('');
  const [maxPlayers, setMaxPlayers] = useState(4);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/lobbies/create', { name, maxPlayers });
    setName('');
    setMaxPlayers(4);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Lobby Name" 
      />
      <input 
        type="number" 
        value={maxPlayers} 
        onChange={(e) => setMaxPlayers(e.target.value)} 
        placeholder="Max Players" 
      />
      <button type="submit">Create Lobby</button>
    </form>
  );
};

export default CreateLobby;
