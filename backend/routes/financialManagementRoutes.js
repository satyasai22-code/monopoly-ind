const express = require('express');
const financialManagementController = require('../controllers/financialManagementController');

const router = express.Router();

router.post('/make-transaction', financialManagementController.makeTransaction);

module.exports = router;
