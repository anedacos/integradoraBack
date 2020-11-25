const mongoose = require("mongoose");
const DBConfig = require("../DBConnection");

const DB = () => {
  return mongoose
    .connect(DBConfig.database, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connnection successful!"));
};

module.exports = DB;
