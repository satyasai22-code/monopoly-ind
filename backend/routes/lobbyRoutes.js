const express = require('express');
const lobbyController = require('../controllers/lobbyController');

const router = express.Router();

router.post('/', lobbyController.createLobby);
router.get('/', lobbyController.getLobbies);
router.post('/join', lobbyController.joinLobby);

module.exports = router;
