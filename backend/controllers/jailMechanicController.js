const JailMechanicService = require('../services/JailMechanicService');

exports.handleJailAction = (req, res) => {
    try {
        const { gameId, playerId, action } = req.body;
        const game = JailMechanicService.handleJailAction(gameId, playerId, action);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
