const express = require('express');
const { sendMessage, getMessages } = require('../controllers/chatController');

const router = express.Router();

router.post('/:gameId/send', sendMessage);
router.get('/:gameId', getMessages);

module.exports = router;
