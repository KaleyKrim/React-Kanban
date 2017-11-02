const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../models');

const port = process.env.port || 8080;

const User = db.user;
const Card = db.card;
const Status = db.status;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api/cards', (req, res) => {
  return Card.findAll()
  .then(cards => {
    return res.json(cards);
  })
});

app.post('/api/cards', (req, res) => {

  console.log(req.body);

  let title = req.body.title;
  let priority = req.body.priority;
  let status = 1;
  let assignedTo = req.body.assignedTo;

  return Card.create({ title: title, priority: priority, status: status, assigned_to: assignedTo })
  .then(newCard => {
    return res.json(newCard);
  });
});

app.listen(port, () => {
  db.sequelize.sync({ force: false });
  console.log('Server listening on :', port);
});