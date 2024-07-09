const games = [];

exports.startGame = (lobbyId) => {
    const game = { id: Date.now(), lobbyId, players: [], board: [], currentTurn: 0 };
    games.push(game);
    return game;
};

exports.getGameStatus = (gameId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        return game;
    }
    throw new Error('Game not found');
};

exports.rollDice = (gameId) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        return { diceRoll };
    }
    throw new Error('Game not found');
};

exports.movePlayer = (gameId, playerId, steps) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        // Find the player and update position
        const player = game.players.find(p => p.id === playerId);
        player.position = (player.position + steps) % game.board.length;
        return game;
    }
    throw new Error('Game not found');
};
