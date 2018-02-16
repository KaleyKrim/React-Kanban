const express = require('express');
const cards = require('./cards');
const router = express.Router();

router.use('/cards', cards);

module.exports = router;