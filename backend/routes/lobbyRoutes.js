const express = require('express');
const { createLobby, joinLobby, getLobbies } = require('../controllers/lobbyController');

const router = express.Router();

router.post('/create', createLobby);
router.post('/join', joinLobby);
router.get('/', getLobbies);

module.exports = router;
