const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../models');

const port = process.env.port || 8080;

const User = db.user;
const Card = db.card;
const Status = db.status;
const Priority = db.priority;

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

app.get('/api/card/:id', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return res.json(card);
  });
});

app.put('/api/card/:id', (req, res) => {
  let newInfo = req.body;
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return Card.update(newInfo, {
      where: [{id: cardId}],
      returning: true,
      plain: true
    })
    .then(card => {
      return res.json(card);
    })
  })
});

app.post('/api/cards', (req, res) => {

  let title = req.body.title;
  let priority = req.body.priority;
  let status = 1;
  let assignedTo = req.body.assignedTo;

  return Card.create({ title: title, priority: priority, status: status, assigned_to: assignedTo })
  .then(newCard => {
    return res.json(newCard);
  });
});

app.get('/api/users', (req, res) => {
  return User.findAll()
  .then(users => {
    return res.json(users);
  })
});

app.get('/api/priorities', (req, res) => {
  return Priority.findAll()
  .then(priorities => {
    console.log(priorities);
    return res.json(priorities);
  })
});

app.post('/api/users', (req, res) => {
  let name = req.body.name;

  return User.create({ name: name })
  .then(newUser => {
    return res.json(newUser);
  });
});


app.listen(port, () => {
  db.sequelize.sync({ force: false });
  console.log('Server listening on :', port);
});