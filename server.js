const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const controllers= require("./controllers");
const helpers = require("./utils/helpers");
//? what are these (below)?
const session = require("express-session");

const app = express();

// Create the Handlebars.js engine object with custom helper functions

const PORT = process.env.PORT || 3500;
const sequelize = require("./config/connection");

//? what is this (below) ?
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const hbs = exphbs.create({ helpers });
// Inform Express.js which template engine we're using
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session(sess));
//*controllers are routes
app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}`));
});
