const express = require('express');
const router = express.Router();

const Card = require('../models/cardSchema.model');

router.route('/')
  .get( async (req,res,next) =>{
    res.render('index', {
      cardAmount: await Card.find((err, doc) =>{
            return doc
          })
    })
  });

router.route('/cards')
  .get((req,res,next) =>{
    res.render('cards')
  })
  .post((req,res,next) =>{
    const addCard = new Card({
      title: req.body.titleInput[0],
      type: req.body.titleInput[1],
      text: req.body.textInput
    });
    addCard.save((err, document) =>{
      const errors = getErrors(err);
      if(errors == undefined) {
        res.redirect('/')
      }
    })
  })

  function getErrors(err){
    let errorArray = [];
    if (err) {
      if (err.errors['title']) {
        console.log(err.errors['title'].message)
        errorArray.push('title');
      }
      if (err.errors['text']) {
        console.log(err.errors['text'].message)
        errorArray.push('text');
      }
    };
  }

module.exports = router;
