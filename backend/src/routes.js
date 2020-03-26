const express = require('express');

const usernamecontroller = require('./controllers/usernamecontroller');
const testeController = require('./controllers/testeController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
  
routes.post('/sessions', SessionController.create);


routes.get('/usernames', usernamecontroller.index);
routes.post('/usernames', usernamecontroller.create);

routes.get('/profile', ProfileController.index);

routes.get('/teste', testeController.index);
routes.post('/teste', testeController.create);
routes.delete('/teste/:id', testeController.delete);

module.exports = routes;
