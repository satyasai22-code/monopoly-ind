const { GameState } = require('../models/gameState');

let gameState = new GameState();

const startGame = (req, res) => {
  gameState = new GameState();
  res.status(200).json({ message: 'Game started', gameState });
};

const rollDice = (req, res) => {
  const { playerId } = req.body;
  const diceRoll = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
  gameState.movePlayer(playerId, diceRoll);
  res.status(200).json({ diceRoll, gameState });
};

const buyProperty = (req, res) => {
  const { playerId } = req.body;
  gameState.buyProperty(playerId);
  res.status(200).json({ gameState });
};

module.exports = { startGame, rollDice, buyProperty };
