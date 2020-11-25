"use strict";

const express = require("express");

const users = require("./users");
const feedback = require("./feedback");
const verifyRequest = require("./middleware_check");

const router = express.Router();

router.use("/users", users);

router.use("/feedback", feedback);

module.exports = router;
