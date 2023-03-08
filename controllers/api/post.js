const express = require("express");
const { User, Post, Comment } = require("../../models");
const auth = require("../../utils/auth");
// const { v4: uuidv4 } = require('uuid');
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

    // let postId = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

    let postObj = {
      id: req.body.Id,
      p_title: req.body.p_title,
      p_content: req.body.p_content      
    }
    const newPost = await Post.create(postObj);
    //you can do a res.json (instead of rendering) for creating data
    // res.json("post");
    console.log(postObj);
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
        id: req.body.Id,
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
