const app = require("./src/server");
const dbConnection = require("./src/config/dbConnection");

require('dotenv').config()
const PORT = process.env.PORT;

dbConnection()
.then(() => {app.listen(PORT, () => {})
}).catch((err) => console.log("Problemas en la conexion", err.message))
