const games = require('./GameLogicService').games; // Assuming this is shared or imported

exports.buyProperty = (gameId, playerId, propertyId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const property = game.board.find(p => p.id === propertyId);
        if (!property.owner) {
            property.owner = playerId;
            const player = game.players.find(p => p.id === playerId);
            player.money -= property.price;
            return game;
        }
        throw new Error('Property already owned');
    }
    throw new Error('Game not found');
};

exports.payRent = (gameId, playerId, propertyId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const property = game.board.find(p => p.id === propertyId);
        if (property.owner && property.owner !== playerId) {
            const player = game.players.find(p => p.id === playerId);
            const owner = game.players.find(p => p.id === property.owner);
            player.money -= property.rent;
            owner.money += property.rent;
            return game;
        }
        throw new Error('No rent due or invalid owner');
    }
    throw new Error('Game not found');
};

exports.getPropertyStatus = (gameId, propertyId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const property = game.board.find(p => p.id === propertyId);
        return property;
    }
    throw new Error('Game not found');
};
