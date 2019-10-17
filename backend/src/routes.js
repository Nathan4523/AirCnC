/**
 * Onde ficará todas as rotas
 */
const express = require('express');
const multer = require('multer');
const uploadConfg = require('./config/upload');

//importando os controller
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();


//modulo de upload criado pelo dev
const upload = multer(uploadConfg);
/**
 * req recebe as informacoes
 * res envia toda resposta da requisicao
 * 
 * Methods para serem usar
 * GET, POST, PUT, DELETE
 * 
 * req.query = Acessar query params (para filtros)
 * req.params = Acessar route params (para edição, delete)
 * req.body = Acessar corpo da requisição (para criação, edição)
 */

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;