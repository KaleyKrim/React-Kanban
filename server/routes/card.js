const express = require('express');
const router = express.Router();

const db = require('../models');
const Card = db.card;

router.get('/:id', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return res.json(card);
  });
});

router.put('/:id', (req, res) => {
  let newInfo = req.body;
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return card.update(newInfo, {
      returning: true,
      plain: true
    })
    .then(card => {
      return res.json(card);
    })
  })
});

router.put('/:id/upvote', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return card.update(newInfo, {
      returning: true,
      plain: true
    })
    .then(card => {
      return res.json(card);
    })
  })
});

router.put('/:id/downvote', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return card.update({
      points : (card.points)++
    }, {
      returning: true,
      plain: true
    })
    .then(card => {
      return res.json(card);
    })
  })
});

router.delete('/:id', (req, res) => {
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