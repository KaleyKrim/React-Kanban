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
    .catch((err) => {
      console.log(err);
    });
  })
});

router.put('/:id/downvote', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    if((card.points === 0) || ((card.points < 0) && (card.status != 1))){
      return card.update({
        points : Number(card.points) - 1,
        status : 1
      }, {
        returning: true,
        plain: true
      })
      .then(card => {
        return res.json(card);
      })
    }else if(card.points === 10 || (card.points < 10 && card.points > 1) && (card.status != 2)){
      return card.update({
        points : Number(card.points) - 1,
        status : 2
      }, {
        returning: true,
        plain: true
      })
      .then(card => {
        return res.json(card);
      })
    }else{
      return card.update({
        points : Number(card.points) - 1
      }, {
        returning: true,
        plain: true
      })
      .then(card => {
        return res.json(card);
      })
    }

  })
});

router.put('/:id/upvote', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    if((card.points === (-1)) || (((card.points > -1 && card.points < 8) && card.status != 2))){
      return card.update({
        points : Number(card.points) + 1,
        status : 2
      }, {
        returning: true,
        plain: true
      })
      .then(card => {
        return res.json(card);
      })
    }else if(card.points === 9 || (card.points > 9 && card.status != 3)){
      return card.update({
        points : Number(card.points) + 1,
        status : 3
      }, {
        returning: true,
        plain: true
      })
      .then(card => {
        return res.json(card);
      })
    }else{
      return card.update({
        points : Number(card.points) + 1
      }, {
        returning: true,
        plain: true
      })
      .then(card => {
        return res.json(card);
      })
    }
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
      return res.json(results);
    })
  })
});

module.exports = router;