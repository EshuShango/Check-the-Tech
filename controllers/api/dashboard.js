const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const auth = require("../../utils/auth");
// const format_date = require('../../utils/helpers');

router.get("/", auth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  // try {
  //   const postData = await Post.findAll({
  //     include: [{ model: User }],
  //     where: {
  //       user_id: req.session.user_id,
  //     },
  //   });

  //   const posts = postData.map((post) => post.get({ plain: true }));
  //   posts.map((post) => {
  //     post.date_created = format_date(post.date_created);
  //   });

  //   res.render("dashboard", {
  //     posts,
  //     logged_in: req.session.logged_in,
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  res.render("homepage");
})

module.exports = router;
