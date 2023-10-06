const mongoose = require("mongoose");
MONGO_URI = "mongodb + srv://codemanishh:codemanishh@cluster0.uv7xqnh.mongodb.net/"
const connectToDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`Connecte DB: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
