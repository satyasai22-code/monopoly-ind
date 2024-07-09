const ChatMessage = require('../models/ChatMessage');
const { emitEvent } = require('../utils/WebSocket');
const games = require('./GameLogicService').games;

exports.sendMessage = (gameId, playerId, message) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const chatMessage = new ChatMessage(Date.now(), playerId, message);
        game.chat.push(chatMessage);
        emitEvent(gameId, 'newMessage', chatMessage);
        return chatMessage;
    }
    throw new Error('Game not found');
};

exports.getMessages = (gameId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        return game.chat;
    }
    throw new Error('Game not found');
};
