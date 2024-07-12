const express = require('express');
const lobbyController = require('../controllers/lobbyController');

const router = express.Router();

router.post('/', lobbyController.createLobby);
router.post('/join', lobbyController.joinLobby);
router.get('/:lobbyId', lobbyController.getLobby);
router.get('/', lobbyController.getLobbies);

module.exports = router;

