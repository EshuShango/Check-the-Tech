const express = require("express");
const { User, Post, Comment } = require("../../models");
const auth = require("../../utils/auth");
const formatDate = require("../../utils/helpers");

const userApi = express.Router();

// userApi.get('/', async (req, res) => {
//   try {

//     let getAllUsers = await User.findAll({ attributes: { exclude: ['password']}});

//     res.json(getAllUsers);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

userApi.post("/signup", async (req, res) => {
  // console.log(req.body)

  try {
    const { fullname, username, email, password } = req.body;

    const user = await User.create({
      name: fullname,
      username,
      email,
      password,
    });

    // set session var based on the response from the database
    // saving to the sess
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      (req.session.email = user.email), (req.session.logged_in = true);
      res.status(200).json(user);
    });
    // console.log('req.session', req.session);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

userApi.post("/login", async (req, res) => {
  console.log("HELLO");
  let userEmail = req.body.email;
  try {
    const findUser = await User.findOne({
      where: {
        email: userEmail,
      },
    });

    if (!findUser) {
      res.status(400).send("Sorry, could not find that email!");
      return;
    }

    const passwordCheck = findUser.checkPassword(req.body.password);

    if (!passwordCheck) {
      res.status(400).send("Sorry, incorrect password!");
      return;
    }

    req.session.save(() => {
      // const userData = User.findAll(req.body.id)
      req.session.user_id = findUser.id;
      req.session.logged_in = true;

      res.json({ user: findUser, message: "You're now logged in!" });
      res.render("dashboard", {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id,
      });
     
    });
  } catch (err) {
    res.status(400).json(err);
  }
}).post("/login", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
    user_id: req.session.user_id,
  })
})

userApi.post("/logout", (req, res) => {
  // console.log("HELLO");
  if (req.session.logged_in) {
    req.session.destroy(() => {
      // req.session.logged_in = false;
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = userApi;
