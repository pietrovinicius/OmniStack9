const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionsController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//aqui é onde vou criar as rotas
/* routes.get
routes.put
routes.delete
routes.post */

//rota do store Sessions
routes.post('/sessions', SessionController.store);

//rota do store Spots
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail') , SpotController.store);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings' , BookingController.store);

module.exports = routes;