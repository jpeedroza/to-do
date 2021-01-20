import express from "express";
import Controller from "../controller/index.js";

const router = express.Router();
const ControllerCard = new Controller;

router.route('/')
  .get( ControllerCard.getLandingPage );

router.route('/cards/')
  .get( ControllerCard.getCreateCardPage )
  .post( ControllerCard.createCard );

router.route('/edit/:id')
  .get( ControllerCard.getEditPage )
  .post( ControllerCard.updateCard );

router.route('/delete/:id')
  .get( ControllerCard.deleteCard );

export default router;
