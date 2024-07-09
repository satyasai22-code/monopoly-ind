const TradingService = require('../services/TradingService');

exports.proposeTrade = (req, res) => {
    const { gameId } = req.params;
    const { fromPlayerId, toPlayerId, offer, request } = req.body;
    const trade = TradingService.proposeTrade(gameId, fromPlayerId, toPlayerId, offer, request);
    res.status(201).json(trade);
};

exports.acceptTrade = (req, res) => {
    const { gameId } = req.params;
    const { tradeId } = req.body;
    const updatedGame = TradingService.acceptTrade(gameId, tradeId);
    res.status(200).json(updatedGame);
};

exports.rejectTrade = (req, res) => {
    const { gameId } = req.params;
    const { tradeId } = req.body;
    const updatedGame = TradingService.rejectTrade(gameId, tradeId);
    res.status(200).json(updatedGame);
};
