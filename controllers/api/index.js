// const router = require("express").Router();
const express = require("express");
const userApi = require("./user.js");
const postApi = require("./post.js");
const dashBoApi = require("./dashboard.js");

const api = express.Router();

api.use("/user", userApi);
api.use("/post", postApi);
api.use("/dashboard", dashBoApi);

module.exports = api;