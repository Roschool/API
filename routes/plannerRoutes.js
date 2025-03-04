const express = require('express');
const { getAfspraken, voegAfspraakToe } = require('../controllers/plannerController');
const checkApiKey = require('../middleware/apiKeyMiddleware');

const router = express.Router();

// Alle routes vereisen API key
router.get('/afspraken', checkApiKey, getAfspraken);
router.post('/afspraken', checkApiKey, voegAfspraakToe);

module.exports = router;
