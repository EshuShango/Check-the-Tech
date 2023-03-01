// const router = require("express").Router();
const express = require("express");

const userApi = require("./user.js");
const postApi = require("./post.js");
const commentApi = require("./comment.js");

const api = express.Router();

api.use("/user", userApi);
api.use("/post", postApi);
api.use("/comment", commentApi);

module.exports = api;