const Jail = require('../models/Jail');
const { emitEvent } = require('../utils/WebSocket');
const games = require('./GameLogicService').games;

exports.handleJailAction = (gameId, playerId, action) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const jail = game.jail || new Jail();

        if (action === 'sendToJail') {
            jail.addPlayer(playerId);
            emitEvent(gameId, 'playerSentToJail', { playerId });
        } else if (action === 'releaseFromJail') {
            jail.removePlayer(playerId);
            emitEvent(gameId, 'playerReleasedFromJail', { playerId });
        }

        game.jail = jail;
        return game;
    }
    throw new Error('Game not found');
};
