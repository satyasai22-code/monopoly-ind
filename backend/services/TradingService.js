const Trade = require('../models/Trade');
const { emitEvent } = require('../utils/WebSocket');
const games = require('./GameLogicService').games;

exports.proposeTrade = (gameId, fromPlayerId, toPlayerId, offer, request) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const trade = new Trade(Date.now(), fromPlayerId, toPlayerId, offer, request);
        game.trades.push(trade);
        emitEvent(gameId, 'tradeProposed', trade);
        return trade;
    }
    throw new Error('Game not found');
};

exports.acceptTrade = (gameId, tradeId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const trade = game.trades.find(t => t.id === tradeId);
        if (trade && trade.status === 'pending') {
            // Handle the offer and request items (e.g., properties, money)
            trade.status = 'accepted';
            emitEvent(gameId, 'tradeAccepted', trade);
            return game;
        }
        throw new Error('Trade not found or already processed');
    }
    throw new Error('Game not found');
};

exports.rejectTrade = (gameId, tradeId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const trade = game.trades.find(t => t.id === tradeId);
        if (trade && trade.status === 'pending') {
            trade.status = 'rejected';
            emitEvent(gameId, 'tradeRejected', trade);
            return game;
        }
        throw new Error('Trade not found or already processed');
    }
    throw new Error('Game not found');
};
