const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

router.post('/send', chatController.sendMessage);
router.get('/:gameId', chatController.getMessages);

module.exports = router;
