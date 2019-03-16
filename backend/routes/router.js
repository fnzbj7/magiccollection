const express = require("express");
const router = express.Router();

// Controllers
const calendarController = require('../controllers/calendar');
const cardController = require('../controllers/card');

// calendarController
router.get('/calendar', calendarController.getEvents);

// cardController
router.get('/card/allsetcard', cardController.getAllCardsFromSet);
router.get('/card/pagecard', cardController.getCardsWithPaging);


module.exports = router;