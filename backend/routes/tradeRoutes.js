const express = require('express');
const tradeController = require('../controllers/tradeController');

const router = express.Router();

router.post('/propose', tradeController.proposeTrade);
router.post('/accept', tradeController.acceptTrade);
router.post('/reject', tradeController.rejectTrade);

module.exports = router;
