import { render } from 'ejs'
import Card from '../models/cardSchema.model.js'

export default class ControllerCard{
  constructor(){
    this.optionsCreatePage = {
      pageContent: "Criação de Card",
      cardContent: '',
      actions: '/cards',
      method: 'POST',
      errorsHandler: {errors:{}}
    }
    this.optionsEditPage = (doc, req) => {
      return{

      }
    }
  }

  getLandingPage = async(req,res,next) => {
    try {
      res.render('index', {
        cardAmount:
          await Card.find((err, doc) =>{
            return doc
          }),
      });
    } catch (error) {
      res.status(404).end()
      console.log(error);
    }
  }

  getCreateCardPage = (req,res,next) =>{
    try {
      res.render('cards', this.optionsCreatePage);
    } catch (error) {
      res.status(404).end()
      console.log(error);
    }
  }

  createCard = async (req,res,next) =>{
    try {
      const addCard = new Card({
        title: req.body.titleInput[0],
        type: req.body.titleInput[1],
        text: req.body.textInput
      });
      await addCard.save((err, document) =>{
        if(err === null){
          res.redirect('/')
        } else {
          res.render('cards', {...this.optionsCreatePage, errorsHandler: err});
        }
      })
    } catch (error) {
      res.status(404).end()
      console.log(error);
    }
  }

  getEditPage = async (req,res,next) =>{
    try {
      await Card.findById(req.params.id, (err,doc) =>{
        if(!err){
          res.render('cards', {
            pageContent: "Edit de Card",
            cardContent: doc,
            actions: `/edit/${req.params.id}`,
            method: 'POST',
            errorsHandler: {errors:{}}
          })
        }
      })
    } catch (error) {
      res.status(404).end();
      console.log(error);
    }
  }

  updateCard = async (req,res,next) =>{
    try {
      const changes = {
        title: req.body.titleInput[0],
        type: req.body.titleInput[1],
        text: req.body.textInput
      }
      Card.findByIdAndUpdate(req.params.id, changes ,{new: true}, (err, doc) =>{
        if(err) throw new Error(err)
      })
      res.redirect('/')
    } catch (error) {
      res.status(404).end()
      console.log(error);
    }
  }

  deleteCard = async (req,res,next) =>{
    try {
      await Card.findByIdAndDelete(req.params.id)
      res.redirect('/')
    } catch (err) {
      res.status(404).end();
      console.log(err)
    }
  }

}

