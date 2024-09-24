const express = require('express');
const routes = express.Router();
const cal = require('../controller/CalapanController.js');


routes.get('/', cal.index);
routes.post('/save', cal.save)

module.exports = routes;