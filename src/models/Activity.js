const DataBase = require("../configs/database/db");
const Sequelize = require('sequelize');

class Activity extends Sequelize.Model {}

Activity.init({
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  RFID:{
    type: Sequelize.STRING,
    allowNull: false
  },
  activityDate:{
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  sequelize: DataBase, 
  modelName: 'Activity' 
});

module.exports = Activity;
