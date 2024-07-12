const { emitEvent, emitEventWithOutGameId } = require('../utils/WebSocket');
const GameLogicService = require('../services/GameLogicService');
const Lobby = require(`../models/Lobby`);
const lobbies = [];

exports.createLobby = (name) => {
    const lobby = new Lobby(Date.now(), name, []);
    console.log(`lobby created: ${lobby}`)
    lobbies.push(lobby);
    emitEventWithOutGameId("lobbyUpdated", lobbies);
    return lobby;
};

exports.getLobby = (lobbyId) => {
    return lobbies.find(lobby => lobby.id === lobbyId);
};

exports.joinLobby = (lobbyId, playerName) => {
    const lobby = lobbies.find(l => l.id === lobbyId);
    if (lobby ) {
        lobby.players.push({ id: Date.now(), name: playerName });
        emitEventWithOutGameId("lobbyUpdated", lobbies);
        return lobby;
    }
    throw new Error('Lobby is full or does not exist');
};

exports.getLobbies = () => lobbies;
