const app = require("./src/server");
const dbConnection = require("./src/config/dbConnection");
const PORT = 3000;

dbConnection().then(() => {
  app.listen(PORT, () => {});
}).catch((err) => console.log("Problemas"))
