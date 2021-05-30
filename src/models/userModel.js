const {Sequelize} = require('sequelize');
const sequelize = require('../database/database');
 
const Aluno = sequelize.define('aluno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rga: {
      type: Sequelize.STRING,
      allowNull: false
    },
    curso: {
      type: Sequelize.STRING,
    },
    situacao: {
      type: Sequelize.STRING,
    },
    registrado_em: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
},  {
  modelName: 'aluno',
  freezeTableName: true
})
 
module.exports = Aluno;