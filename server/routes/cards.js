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

router.get('/', (req, res) => {
  return Card.findAll()
  .then(cards => {
    return res.json(cards);
  })
});

router.post('/', upload.array('file', 1), (req, res) => {
  let title = req.body.title;
  let status = 2;

  if(req.files[0]){
    return Card.create({
      title : title,
      photo_url : req.files[0].location,
      status : status
    })
    .then(newCard => {
      return res.json(newCard);
    })
    .catch((err) => {
      console.log(err);
    })
  }else{
    return Card.create({
      title : title,
      status : status
    })
    .then(newCard => {
      return res.json(newCard);
    })
    .catch((err) => {
      console.log(err);
    })
  }

});



module.exports = router;