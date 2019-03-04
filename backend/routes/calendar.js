const express = require('express');
const router = express.Router();

const calendarController = require('../controllers/calendar');

router.get('', calendarController.getEvents);

module.exports = router;