const { emitEvent } = require('../utils/WebSocket');
const games = require('./GameLogicService').games;

exports.sendMessage = (gameId, playerId, message) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const chatMessage = { id: Date.now(), playerId, message, timestamp: new Date() };
        game.chat = game.chat || [];
        game.chat.push(chatMessage);
        emitEvent(gameId, 'newMessage', chatMessage);
        return chatMessage;
    }
    throw new Error('Game not found');
};

exports.getMessages = (gameId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        return game.chat || [];
    }
    throw new Error('Game not found');
};
