(async () => {
  const db = require("./db");


  
  await db.sync();
})();