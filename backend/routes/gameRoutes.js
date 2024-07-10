const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/start', gameController.startGame);
router.get('/:gameId/status', gameController.getGameStatus);
router.post('/:gameId/roll-dice', gameController.rollDice);
router.post('/:gameId/move-player', gameController.movePlayer);

module.exports = router;
