const express = require('express');
const router = express.Router();

const Controller = require('../controller')
const ControllerCard = new Controller;
const Card = require('../models/cardSchema.model');

router.route('/')
  .get( ControllerCard.getLandingPage )

router.route('/cards')
  .get( ControllerCard.getCreateCardPage )
  .post( ControllerCard.CreateCard );



module.exports = router;
