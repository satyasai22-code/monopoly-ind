const { GameState } = require('../models/gameState');

let gameState = new GameState();

const startGame = (req, res) => {
  gameState = new GameState();
  res.status(200).json({ message: 'Game started', gameState });
  req.app.get('io').emit('gameState', gameState);
};

const rollDice = (req, res) => {
  const { playerId } = req.body;
  const diceRoll = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
  gameState.movePlayer(playerId, diceRoll);
  res.status(200).json({ diceRoll, gameState });
  req.app.get('io').emit('gameState', gameState);
};

const buyProperty = (req, res) => {
  const { playerId } = req.body;
  gameState.buyProperty(playerId);
  res.status(200).json({ gameState });
  req.app.get('io').emit('gameState', gameState);
};

module.exports = { startGame, rollDice, buyProperty };
