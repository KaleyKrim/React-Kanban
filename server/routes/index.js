const express = require('express');
const cards = require('./cards');
const card = require('./card');
const router = express.Router();

router.use('/cards', cards);
router.use('/card', card);

module.exports = router;