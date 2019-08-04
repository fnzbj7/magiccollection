const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

// Controllers
const calendarController = require('../controllers/calendar');
const cardController = require('../controllers/card');
const userController = require('../controllers/user');

// calendarController
router.get('/calendar', calendarController.getEvents);

// cardController
router.get('/card/allsetcard', checkAuth, cardController.getAllCardsFromSet);

// userController
router.post('/user/userlogin', userController.userLogin);
router.post('/user/registration', userController.registration);
router.post('/user/verification', userController.verification);

module.exports = router;
