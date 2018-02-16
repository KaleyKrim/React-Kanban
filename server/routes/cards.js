const express = require('express');
const router = express.Router();

const db = require('../models');
const Card = db.card;

router.get('/cards', (req, res) => {
  return Card.findAll()
  .then(cards => {
    return res.json(cards);
  })
});

router.post('/cards', (req, res) => {

  let title = req.body.title;
  let priority = req.body.priority;
  let status = 1;
  let assignedTo = req.body.assignedTo;

  return Card.create({ title: title })
  .then(newCard => {
    return res.json(newCard);
  });
});

router.get('/card/:id', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return res.json(card);
  });
});

router.put('/card/:id', (req, res) => {
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

router.delete('/card/:id', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return card.update({
      deleted_at : Date.now()
    },{
      returning: true,
      plain: true
    })
    .then(results => {
      return res.json({ results });
    })
  })
});

module.exports = router;