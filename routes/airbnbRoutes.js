const express = require('express');
const router = express.Router();
const airbnbController = require('../controllers/airbnbController');

router.get('/', airbnbController.getProperties);

module.exports = router;