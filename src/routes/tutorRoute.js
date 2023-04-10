const { Router } = require('express');
const tutorController = require('../controllers/tutorController');

const router = Router();

router
      .get('/tutores', tutorController.getAllTutors)
      .get('/tutores/:id', tutorController.getTutorById)
      .post('/tutores', tutorController.createTutor)
      .put('/tutores/:id', tutorController.updateTutor)
      .delete('/tutores/:id', tutorController.deleteTutor);

module.exports = router;
