const TradingService = require('../services/TradingService');

exports.proposeTrade = (req, res) => {
    try {
        const { gameId, fromPlayerId, toPlayerId, offer, request } = req.body;
        const trade = TradingService.proposeTrade(gameId, fromPlayerId, toPlayerId, offer, request);
        res.status(201).json(trade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.acceptTrade = (req, res) => {
    try {
        const { gameId, tradeId } = req.body;
        const game = TradingService.acceptTrade(gameId, tradeId);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.rejectTrade = (req, res) => {
    try {
        const { gameId, tradeId } = req.body;
        const game = TradingService.rejectTrade(gameId, tradeId);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
