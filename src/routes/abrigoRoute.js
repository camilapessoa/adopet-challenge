const { Router } = require('express');
const abrigoController = require('../controllers/AbrigoController');

const router = Router();

router
      .get('/abrigo', abrigoController.getAllAbrigos)
      .get('/abrigo/:id', abrigoController.getAbrigoById)
      .post('/abrigo', abrigoController.createAbrigo)
      .put('/abrigo/:id', abrigoController.updateAbrigo)
      .delete('/abrigo/:id', abrigoController.deleteAbrigo);

module.exports = router;


