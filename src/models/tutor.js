'use strict';
const criaHasheSalSenha = require('../utils/criaHashESalSenha')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tutor.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    sobre: DataTypes.STRING,
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutor',
    hooks:{
      beforeCreate: async(tutor) => {
        const { senha } = tutor;
        const { salSenha, hashSenha } = criaHasheSalSenha(senha)
        tutor.senha = hashSenha
        tutor.salSenha = salSenha
      }
    }
  });
  return Tutor;
};
