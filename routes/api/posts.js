const express = require("express");

const router = express.Router();

// @route  GET api/post
// @desc   TEST ROUTE
// @access PUBLIC
router.get("/", (req, res) => res.send("Post Route"));

module.exports = router