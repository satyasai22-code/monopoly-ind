const LobbyService = require('../services/LobbyService');

exports.createLobby = (req, res) => {
    const { name, maxPlayers } = req.body;
    const lobby = LobbyService.createLobby(name, maxPlayers);
    res.status(201).json(lobby);
};

exports.joinLobby = (req, res) => {
    const { lobbyId, playerName } = req.body;
    try {
        const lobby = LobbyService.joinLobby(lobbyId, playerName);
        res.status(200).json(lobby);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getLobbies = (req, res) => {
    const lobbies = LobbyService.getLobbies();
    res.status(200).json(lobbies);
};
