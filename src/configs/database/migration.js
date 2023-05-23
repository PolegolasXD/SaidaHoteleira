(async () => {
  const DataBase = require("./db");

  
  const Activity = require(__dirname + "/../../models/Activity");
  const Client = require(__dirname + "/../../models/Client");
  const Employee = require(__dirname + "/../../models/Employee");
  const InOut = require(__dirname + "/../../models/InOut");
  const Rfid = require(__dirname + "/../../models/Rfid");
  
  await DataBase.sync();
})();