const express = require("express");
const router = express.Router();

// Controllers
const calendarController = require('../controllers/calendar');
const cardController = require('../controllers/card');
const userController = require('../controllers/user');

// calendarController
router.get('/calendar', calendarController.getEvents);

// cardController
router.get('/card/allsetcard', cardController.getAllCardsFromSet);
router.get('/card/pagecard', cardController.getCardsWithPaging);

// userController
router.post('/user/userlogin', userController.userLogin);
router.post('/user/registration', userController.registration);

module.exports = router;