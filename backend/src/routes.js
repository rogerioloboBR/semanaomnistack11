const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

/**Rotas das Ongs */
routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

/**Rotas dos Incidentes */
routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id' , IncidentController.delete);

/**ProfileOng */
routes.get('/profile', ProfileController.index);
module.exports = routes;