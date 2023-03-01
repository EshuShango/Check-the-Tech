const express = require("express");
//* const api = require("./api/index");
//? is the way below valid ?
//? || should i use the above
//? || do either one work ?
const api = require("./api");

const homeR = require("./homeRoutes");
const dashboardR = require("./dashboardRoutes");

const controller = express.Router();
// const controller = require("express").Router();
// const { User, Comment, Post } = require('../models');
// const format_date = require('../utils/helpers');

controller.use("/api", api);

controller.use("/", homeR);
controller.use("/dashboard", dashboardR);

//! not sure how to do...yet
// controller.get('/', async (req, res) => {
//   try {
//       const postData = await Post.findAll({
//           include: [{ model: User }]
//       });
//       const posts = postData.map((post) => post.get({ plain: true }));
//       posts.map((post) => post.date_created = format_date(post.date_created));

//       res.render('all', {
//           posts,
//           logged_in: req.session.logged_in
//       });
//   } catch (err) {
//       res.status(500).json(err);
//   };
// });

// controller.get('/login', (req, res) => {
//   res.render('login', {});
// });
//!---------

module.exports = controller;
