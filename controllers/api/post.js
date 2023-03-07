const express = require("express");
const { User, Post, Comment } = require("../../models");
const auth = require("../../utils/auth");
const formatDate = require("../../utils/helpers");

const postApi = express.Router();

postApi.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.json("post");
});

// GET a single
postApi.get("/:id", async (req, res) => {
  res.json("post");
});

//CREATE
postApi.post("/", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    //you can do a res.json (instead of rendering) for creating data
    // res.json("post");
    res.json(newPost);
  } catch (error) {
    res.json(error);
  }
});

postApi.put("/:id", async (req, res) => {
  try {
    const updPost = await Post.update(req.body, {
      where: {
        user_id: req.session.user_id,
        id: req.body.post_id
      },
    });
    res.json(updPost);
  } catch (error) {
    console.log(error);
    res.json(error)
  }
});

//DELETE
postApi.delete("/", async (req, res) => {
  res.json("post");
});
module.exports = postApi;
