const Transaction = require('../models/Transaction');
const { emitEvent } = require('../utils/WebSocket');
const games = require('./GameLogicService').games;

exports.makeTransaction = (gameId, playerId, amount, description) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const transaction = new Transaction(Date.now(), playerId, amount, description);
        game.transactions = game.transactions || [];
        game.transactions.push(transaction);
        emitEvent(gameId, 'transactionMade', { transaction });
        return game;
    }
    throw new Error('Game not found');
};
