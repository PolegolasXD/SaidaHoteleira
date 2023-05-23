const DataBase = require("../configs/database/db");
const Sequelize = require('sequelize');

class Employee extends Sequelize.Model {}

Employee.init({
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
    allowNull: false
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
    type: Sequelize.STRING,
    allowNull: false
  },
  position:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: DataBase, 
  modelName: 'Employee' 
});

module.exports = Employee;