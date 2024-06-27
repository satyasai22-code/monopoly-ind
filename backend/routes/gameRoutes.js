const express = require('express');
const { startGame, rollDice, buyProperty } = require('../controllers/gameController');
const router = express.Router();

router.post('/start', startGame);
router.post('/roll', rollDice);
router.post('/buy', buyProperty);

module.exports = router;
