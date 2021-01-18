const express = require('express');

const Card = require('../models/cardSchema.model');

class ControllerCard{

  getLandingPage = async(req,res,next) => {
    try {
      res.render('index', {
        cardAmount:
          await Card.find((err, doc) =>{
            return doc
          })
      });
      Card.findByIdAndUpdate('6000428629653a042d3cbd90', (err, docs) =>{
        const card = docs
        console.log(card)
      })
    } catch (error) {
      res.status(404).end()
      console.log(error);
    }
  }

  getCreateCardPage = (req,res,next) =>{
    try {
      res.render('cards');
    } catch (error) {
      res.status(404).end()
      console.log(error);
    }
  }

  CreateCard = async (req,res,next) =>{
    try {
      const addCard = new Card({
        title: req.body.titleInput[0],
        type: req.body.titleInput[1],
        text: req.body.textInput
      });
      await addCard.save((err, document) =>{
        const errors = this.getErrors(err);
        if(errors == undefined) {
          res.redirect('/')
        }
      })
    } catch (error) {
      res.status(404).end()
      console.log(error);
    }
  }

  getErrors(err){
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
}

module.exports = ControllerCard;
