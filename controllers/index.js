const express = require("express");
const api = require("./api");
const { User, Post, Comment } = require("../models");
const auth = require("../utils/auth");
const formatDate = require("../utils/helpers");

const controller = express.Router();
controller.use("/api", api);
//!----------
// This controller GETs the home route
// Then responds by rendering the homepage
//* I chained them, it seems to work 
// Then the 2nd GET,responds by rendering the login page,
// But if your logged_in then you get the dashboard
controller
  .get("/", async (req, res) => {
    //!---
    //   try {
    //     const postData = await Post.findAll({
    //         include: [{ model: User }]
    //     });
    //     const posts = postData.map((post) => post.get({ plain: true }));
    //     posts.map((post) => post.date_created = formatDate(post.date_created));

    //     res.render('all', {
    //         posts,
    //         logged_in: req.session.logged_in
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // };

    //!---
    res.render("homepage");
  })
  .get("/dashboard", auth, async (req, res) => {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
    });
  })
  .get("/login", async (req, res) => {
    if (req.session.logged_in) {
      res.status(302).redirect("dashboard");
      return;
    } else {
      res.render("login");
    }
  })
  .get("/signup", async (req, res) => {
    if (req.session.logged_in) {
      res.status(302).redirect("dashboard");
      return;
    } else {
      res.render("signup");
    }
  });

//? controller.delete("/logout", async (req, res) => {
//   if (req.session.logged_in) {

//   }
//? })
//! ----------

module.exports = controller;
