const express = require('express');
const { startGame, getGameStatus, rollDice, movePlayer } = require('../controllers/gameController');

const router = express.Router();

router.post('/start', startGame); 
router.get('/:gameId/status', getGameStatus); 
router.post('/:gameId/rollDice', rollDice); 
router.post('/:gameId/movePlayer', movePlayer); 

module.exports = router;
