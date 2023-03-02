const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const auth = require("../../utils/auth");


router.get("/", async (req, res) => {
  res.render("user")
})

// router.get("/", async (req, res) => {
//   try {
//     //Make sure the password isn't returned for security reasons
//     let getAllUsers = await User.findAll({
//       attributes: { exclude: ["password"] },
//     });

//     res.json(getAllUsers);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post("/login", async (req, res) => {
//   let userEmail = req.body.email;
//   try {
//     const findUser = await User.findOne({
//       where: {
//         email: userEmail,
//       },
//     });

//     if (!findUser) {
//       res.status(400).send("Sorry, could not find that email!");
//       return;
//     }

//     const passwordCheck = findUser.checkPassword(req.body.password);

//     if (!passwordCheck) {
//       res.status(400).send("Sorry, this is an incorrect password!");
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post("/logout", (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
