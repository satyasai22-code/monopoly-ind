const lobbies = [];

exports.createLobby = (name, maxPlayers) => {
    const lobby = { id: Date.now(), name, maxPlayers, players: [] };
    lobbies.push(lobby);
    return lobby;
};

exports.joinLobby = (lobbyId, playerName) => {
    const lobby = lobbies.find(l => l.id === lobbyId);
    if (lobby && lobby.players.length < lobby.maxPlayers) {
        lobby.players.push({ id: Date.now(), name: playerName });
        return lobby;
    }
    throw new Error('Lobby is full or does not exist');
};

exports.getLobbies = () => lobbies;
