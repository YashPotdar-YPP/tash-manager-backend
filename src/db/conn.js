const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log("no connection" + e);
  });