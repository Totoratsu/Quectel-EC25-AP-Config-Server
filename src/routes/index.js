const express = require('express');
const controllers = require('../controllers')

const router = express.Router();

// Views
router.get('/', controllers.index);

// Fucntions
router.get('/install', controllers.install);

router.post('/simple_qmi', controllers.simple_qmi);

router.post('/auto_qmi', controllers.auto_qmi)

module.exports = router;