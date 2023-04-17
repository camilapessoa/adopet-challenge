const jwt = require('jsonwebtoken');

function gerarJwt(usuario) {
  const tokenJwt = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h', });
  return tokenJwt;
}

module.exports = gerarJwt;
