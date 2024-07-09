const PropertyManagementService = require('../services/PropertyManagementService');

exports.buyProperty = (req, res) => {
    const { gameId } = req.params;
    const { playerId, propertyId } = req.body;
    const updatedGame = PropertyManagementService.buyProperty(gameId, playerId, propertyId);
    res.status(200).json(updatedGame);
};

exports.payRent = (req, res) => {
    const { gameId } = req.params;
    const { playerId, propertyId } = req.body;
    const updatedGame = PropertyManagementService.payRent(gameId, playerId, propertyId);
    res.status(200).json(updatedGame);
};

exports.getPropertyStatus = (req, res) => {
    const { gameId, propertyId } = req.params;
    const propertyStatus = PropertyManagementService.getPropertyStatus(gameId, propertyId);
    res.status(200).json(propertyStatus);
};
