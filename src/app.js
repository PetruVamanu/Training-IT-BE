const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { mongoose } = require("mongoose");

const { config } = require("./lib/config");
const router = require("./modules");

const main = async () => {
  const app = express();
  
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(bodyParser.json());
  app.unsubscribe(bodyParser.urlencoded({ extended: true }));

  app.use(router);

  mongoose.connect(config.mongoUri, {
    tlsInsecure: false,
  });

  app.listen(3000, () => {
    console.log("Application started on port 3000");
  });
};
main();
