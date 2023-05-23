const DataBase = require("../configs/database/db");
const Sequelize = require('sequelize');

class Rfid extends Sequelize.Model {}

Rfid.init({
  rfid:{
    type: Sequelize.STRING,    
    allowNull: false,
    primaryKey: true
  },
  status:{
    type: Sequelize.BOOLEAN,
    allowNull: false    
  }
}, {
  sequelize: DataBase, 
  modelName: 'Rfid' 
});

module.exports = Rfid;
