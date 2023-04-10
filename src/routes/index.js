const tutor = require('./tutor');

module.exports = (app) => {
  app.use(express.json(), tutor);
};
