const express = require('express');
const router = express.Router();

const db = require('../models');
const Card = db.card;

const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const skd = require('../_lib/keyconfig.js');

aws.config.update({
  secretAccessKey: skd.secretAccessKey,
  accessKeyId: skd.accessKeyId,
  region: skd.region
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'ideas.storage',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    contentDisposition: 'inline',
    key: function(req, file, cb){
      cb(null, Date.now() + "-" + file.originalname);
    }
  })
});

router.get('/cards', (req, res) => {
  return Card.findAll()
  .then(cards => {
    return res.json(cards);
  })
});

router.post('/', upload.array('upl', 1), (req, res) => {
  let title = req.body.title;
  let status = 1;

  if(req.files[0]){
    return Card.create({
      title : title,
      photo : req.files[0].key
    })
    .then(newCard => {
      return res.json(newCard);
    })
    .catch((err) => {
      console.log(err);
    })
  }else{
    return Card.create({
      title : title
    })
    .then(newCard => {
      return res.json(newCard);
    })
    .catch((err) => {
      console.log(err);
    })
  }

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
    return card.update(newInfo, {
      returning: true,
      plain: true
    })
    .then(card => {
      return res.json(card);
    })
  })
});

router.put('/card/:id/upvote', (req, res) => {
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

router.put('/card/:id/downvote', (req, res) => {
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