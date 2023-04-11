const express = require('express')

const tutor = require('./tutorRoute');
const abrigo = require('./abrigoRoute');

module.exports = (app) => {
  app.use(express.json(), tutor, abrigo);
};
