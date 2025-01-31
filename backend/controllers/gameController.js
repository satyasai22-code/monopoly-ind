const GameLogicService = require('../services/GameLogicService');

exports.startGame = (req, res) => {
    try {
        const { lobbyId } = req.body;
        const game = GameLogicService.startGame(lobbyId);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getGameStatus = (req, res) => {
    try {
        const { gameId } = req.params;
        console.log(`gameId: ${gameId} req: ${req}`)
        const game = GameLogicService.getGameStatus(gameId);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.rollDice = (req, res) => {
    try {
        const { gameId } = req.params;
        const result = GameLogicService.rollDice(gameId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.movePlayer = (req, res) => {
    try {
        const { gameId, playerId, steps } = req.body;
        const game = GameLogicService.movePlayer(gameId, playerId, steps);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
