const express = require('express');
const app = express();

const db = require('../models');

const port = process.env.port || 8080;

const User = db.user;
const Card = db.card;
const Status = db.status;

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log('Server listening on :', port);
});