const mongoose = require("mongoose");

const URI =
  "mongodb+srv://pielvitorilucas:SKyRfKSpsfvfC3dw@micluster.ajlhy8l.mongodb.net/MoviesDB?retryWrites=true&w=majority&appName=MiCluster";

const dbConnection = async () => {
    await mongoose.connect(URI)
};

module.exports = dbConnection