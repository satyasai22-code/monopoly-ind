const express = require('express');
const { proposeTrade, acceptTrade, rejectTrade } = require('../controllers/tradeController');

const router = express.Router();

router.post('/:gameId/propose', proposeTrade);
router.post('/:gameId/accept', acceptTrade);
router.post('/:gameId/reject', rejectTrade);

module.exports = router;
