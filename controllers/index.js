const express = require("express");
const api = require("./api");
// const dashBoApi = require("./api/dashboard.js");
const { User, Post, Comment } = require("../models");
const auth = require("../utils/auth");
const { formatDate } = require("../utils/helpers");

const controller = express.Router();

controller.use("/api", api);
// controller.use("/dashboard", dashBoApi);

controller
  .get("/", async (req, res) => {
    let postData;

    try {
      postData = await Post.findAll({
        include: [{ model: User }],
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }

    let posts = postData.map((post) => post.get({ plain: true }));
    console.log("HEY!!!!!!")

    // posts = posts.map((post) => (post.date_created = formatDate(post.date_created)));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  })
  
  .get("/dashboard", auth, async (req, res) => {
    console.log("dashboard page");

    let postData;
    try {
      console.log('youo')
      postData = await Post.findAll({
        include: [{ model: User }],
        // where: {
        //   user_id: req.session.user_id,
        //   id: req.session.id
        // },
      });
      //turns sequelize into plain js code
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log(posts)
      res.render("dashboard", {
        posts,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }

    // posts = posts.map((post) => (post.date_created = formatDate(post.date_created)));
  })

  // .get("/dashboard/edit/:id", async (req, res) => {
  //   try {
  //     const postData = await Post.findByPk(req.params.id);
  //     const post = postData.get({ plain: true });
  //     post.date_created = format_date(post.date_created);
  //     res.render("singlepost", {
  //       post,
  //       logged_in: req.session.logged_in,
  //       s,
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // })

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
