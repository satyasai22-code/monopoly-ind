const express = require('express');
const { buyProperty, payRent, getPropertyStatus } = require('../controllers/propertyController');

const router = express.Router();

router.post('/:gameId/buy', buyProperty); 
router.post('/:gameId/payRent', payRent); 
router.get('/:gameId/:propertyId/status', getPropertyStatus); 

module.exports = router;
