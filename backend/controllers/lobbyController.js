const LobbyService = require('../services/LobbyService');

exports.createLobby = (req, res) => {
    try {
        const lobby = LobbyService.createLobby(req.name);
        res.status(201).json(lobby);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLobbies = (req, res) => {
    try {
        const lobbies = LobbyService.getLobbies();
        res.status(200).json(lobbies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLobby = async (req, res) => {
    try {
        const { lobbyId } = req.params;
        const lobby = await LobbyService.getLobby(lobbyId);
        if (lobby) {
            res.status(200).json(lobby);
        } else {
            res.status(404).json({ message: 'Lobby not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.joinLobby = (req, res) => {
    try {
        const { lobbyId, playerId } = req.body;
        const lobby = LobbyService.joinLobby(lobbyId, playerId);
        res.status(200).json(lobby);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
