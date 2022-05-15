const path = require("path");
require("dotenv").config();
const express = require("express");
const routes = require("./controllers/");
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

// parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server path to  routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
