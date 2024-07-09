const ChatService = require('../services/ChatService');

exports.sendMessage = (req, res) => {
    const { gameId } = req.params;
    const { playerId, message } = req.body;
    const chatMessage = ChatService.sendMessage(gameId, playerId, message);
    res.status(201).json(chatMessage);
};

exports.getMessages = (req, res) => {
    const { gameId } = req.params;
    const messages = ChatService.getMessages(gameId);
    res.status(200).json(messages);
};
