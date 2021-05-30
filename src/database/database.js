const {Sequelize} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    define:{   
      defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'created_at', 'updated_at'],
      }
    }
  }
});


module.exports = sequelize;