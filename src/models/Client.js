const DataBase = require("../configs/database/db");
const Sequelize = require('sequelize');

class Client extends Sequelize.Model {}

Client.init({
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  address:{
    type: Sequelize.STRING,
  },
  cpf:{
    type: Sequelize.STRING,
    allowNull: false
  },
  birthDate:{
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  contact:{
    type: Sequelize.STRING
  }
}, {
  sequelize: DataBase, 
  modelName: 'Client' 
});


module.exports = Client;