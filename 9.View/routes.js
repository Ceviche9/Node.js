const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

//Home's route
route.get('/', homeController.homePage);
route.post('/', homeController.homePost);

//Contact's route
route.get('/contact', contactController.homePage);


module.exports = route;