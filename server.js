const path = require("path");
require("dotenv").config();
const express = require("express");
const routes = require("./controllers/");
const sequelize = require("./config/connection");
const app = express();

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const helpers = require("./utils/helpers");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.DB_SESSION_SECRET,
  cookie: { maxAge: 10800000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Define server port
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));

// server path to the routes
app.use(routes);

// turn on connection to db and then to the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
