const express = require("express");
const router = require("express").Router();
const api = require("./api");
// const homeR = require("./homeRoutes");
// const dashBoR = require("./dashboardRoutes");

const { User, Post, Comment } = require("../models");
const sequelize = require("../config/connection.js");

const controller = express.Router();

controller.use("/api", api);
// controller.use("/", homeR);
// controller.use("/dashboard", dashBoR);

//!----------
//This controller GETs the home route ? and then responds by rendering the homepages ?
// I also chained them, which the 2nd GET, responds by rendering the login page,
// But if your logged_in then you get the dashboard
controller
  .get("/", async (req, res) => {
    res.render("homepage");
  })
  .get("/login", async (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/dashboard");
      return;
    } else {
      res.render("login");
    }
  });
//! ----------


module.exports = controller;
