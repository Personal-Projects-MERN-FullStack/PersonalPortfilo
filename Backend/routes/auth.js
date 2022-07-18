const express = require("express");
const router = express.Router();
const User = require("../modules/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const JWT_SECRET = "vaibahvisgood$boy";

const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser")
//ROUTE : 1  create a user using: POST /api/auth/CreateUser    // no login required
router.post(
  "/CreateUser",
  [
    body("name", "Enter a valid name").isLength({ min: 2 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    //if there are bad request , return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    //check wheter user with this  email exits already
    try {
      let user = await User.findOne({ success,email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email is already exits" });
      }
      const salt = await bcrypt.genSalt(10);
      secpass = await bcrypt.hash(req.body.password, salt);

      //createing new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });

      //   .then(user => res.json(user)).catch(err=> {
      //     res.json({Error : ' Plz Enter Valid Email', message : err.message})
      //   })
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success,authtoken });
    } catch (error) {
      sucess = false;
      console.error(error.message);
      res.status(500).send(success,"Some error occured");
    }
  }
);

//ROUTE : 2 Authonticate a user using : post "api/auth/login"

router.post(
  "/login",
  [body("email", "Enter a valid email").isEmail(),
  body("password", "Password can not be blank").exists()],
  async (req, res) => {
    let success = false;
    //if error send and bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    const {email,password } = req.body;
    try {
      let user =await User.findOne({email});
      if(!user){
        return res.status(400).json({ success,
          error:"Please try to log in with correct credintials"
        });}


        const passwordcompare = await  bcrypt.compare(password,user.password)
        if(!passwordcompare){
          return res.status(400).json({success,
            error:"Please try to log in with correct credintials"
          });


        }
        const data = {
          user: {
            id: user.id,
          },
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
         success = true;
        res.json({success,authtoken})

      
      



    } catch (error) {
      console.error(error.message);
      success = false
      res.status(500).send(success,"Internal server error");
    }


  }
);

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router;
