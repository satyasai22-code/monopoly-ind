const ChatService = require('../services/ChatService');

exports.sendMessage = (req, res) => {
    try {
        const { gameId, playerId, message } = req.body;
        const chatMessage = ChatService.sendMessage(gameId, playerId, message);
        res.status(201).json(chatMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMessages = (req, res) => {
    try {
        const { gameId } = req.params;
        const messages = ChatService.getMessages(gameId);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
