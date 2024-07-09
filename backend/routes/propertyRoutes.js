const express = require('express');
const propertyController = require('../controllers/propertyController');

const router = express.Router();

router.post('/buy', propertyController.buyProperty);
router.post('/pay-rent', propertyController.payRent);
router.get('/:gameId/:propertyId/status', propertyController.getPropertyStatus);

module.exports = router;
