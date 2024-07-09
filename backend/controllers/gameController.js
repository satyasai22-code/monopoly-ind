const GameLogicService = require('../services/GameLogicService');

exports.startGame = (req, res) => {
    const { lobbyId } = req.body;
    const game = GameLogicService.startGame(lobbyId);
    res.status(201).json(game);
};

exports.getGameStatus = (req, res) => {
    const { gameId } = req.params;
    const gameStatus = GameLogicService.getGameStatus(gameId);
    res.status(200).json(gameStatus);
};

exports.rollDice = (req, res) => {
    const { gameId } = req.params;
    const result = GameLogicService.rollDice(gameId);
    res.status(200).json(result);
};

exports.movePlayer = (req, res) => {
    const { gameId } = req.params;
    const { playerId, steps } = req.body;
    const updatedGame = GameLogicService.movePlayer(gameId, playerId, steps);
    res.status(200).json(updatedGame);
};
