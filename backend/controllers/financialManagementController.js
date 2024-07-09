const FinancialManagementService = require('../services/FinancialManagementService');

exports.makeTransaction = (req, res) => {
    try {
        const { gameId, playerId, amount, description } = req.body;
        const game = FinancialManagementService.makeTransaction(gameId, playerId, amount, description);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
