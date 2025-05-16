const express = require("express");

const router = express.Router();
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");

// @route  GET api/auth
// @desc   TEST ROUTE
// @access PUBLIC
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/auth
//@desc   Authenticate user & get token
//@access PUBLIC
router.post(
  "/",
  [
    check("email", "Please enter valid email").isEmail(),
    check("password", "Please is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      //See if user exits
      let user = await User.findOne({
        email,
      });

      if (!user) {
        return res.status(400).json({
          errors: [
            {
              msg: "Invalid creds",
            },
          ],
        });
      }
  

      const isMatch = await bcrypt.compare(password,user.password);

      if(!isMatch){
        return res.status(400).json({
            errors:[{
                msg:'Invalid Credentials'
            }]
        })
      }
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        //pass secret
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      //return the jsonwebtoken
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
