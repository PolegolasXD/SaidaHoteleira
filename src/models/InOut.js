const DataBase = require("../configs/database/db");
const Sequelize = require('sequelize');

class InOut extends Sequelize.Model {}


InOut.init({
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }, 
  rfid:{
    type: Sequelize.STRING,
    allowNull: false
  },
  dataCheckIn:{
    type: Sequelize.DATE,
    allowNull: false
  },
  dataCheckOut:{
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  sequelize: DataBase, 
  modelName: 'InOut' 
});


module.exports = InOut;
