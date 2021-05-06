const express = require('express');
const controllers = require('../controllers')

const router = express.Router();

// Views
router.get('/', );

// Fucntions
router.post('/exec', controllers.exec);

module.exports = router;