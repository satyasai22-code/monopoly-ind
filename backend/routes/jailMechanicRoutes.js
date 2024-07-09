const express = require('express');
const jailMechanicController = require('../controllers/jailMechanicController');

const router = express.Router();

router.post('/handle-action', jailMechanicController.handleJailAction);

module.exports = router;
