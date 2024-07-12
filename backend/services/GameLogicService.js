const Game = require('../models/Game');
const Player = require('../models/Player');
const Property = require('../models/Property');
const { emitEvent } = require('../utils/WebSocket');
const  games = [];

exports.createGame = (lobbyId) => {
    const game = new Game(lobbyId, lobbyId);
    console.log(`Game created with gameId: ${game.id}`)
    games.push(game);
    return game;
};

exports.startGame = (lobbyId) => {
    // const game = this.createGame(lobbyId);
    emitEvent(game.id, 'gameStarted', game);
    return game;
};

exports.getGameStatus = (gameId) => {
    console.log(`Available Games: ${games.length}`)
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
        emitEvent(gameId, 'diceRolled', { diceRoll });
        return { diceRoll };
    }
    throw new Error('Game not found');
};

exports.movePlayer = (gameId, playerId, steps) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const player = game.players.find(p => p.id === playerId);
        player.position = (player.position + steps) % game.board.length;
        emitEvent(gameId, 'playerMoved', game);
        return game;
    }
    throw new Error('Game not found');
};
