const PropertyManagementService = require('../services/PropertyManagementService');

exports.buyProperty = (req, res) => {
    try {
        const { gameId, playerId, propertyId } = req.body;
        const game = PropertyManagementService.buyProperty(gameId, playerId, propertyId);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.payRent = (req, res) => {
    try {
        const { gameId, playerId, propertyId } = req.body;
        const game = PropertyManagementService.payRent(gameId, playerId, propertyId);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPropertyStatus = (req, res) => {
    try {
        const { gameId, propertyId } = req.params;
        const propertyStatus = PropertyManagementService.getPropertyStatus(gameId, propertyId);
        res.status(200).json(propertyStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
