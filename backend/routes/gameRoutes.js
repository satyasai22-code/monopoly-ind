const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.post('/start', gameController.startGame);
router.get('/:gameId/status', gameController.getGameStatus);
router.post('/roll', gameController.rollDice);
router.post('/move', gameController.movePlayer);

module.exports = router;
