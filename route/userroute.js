require("dotenv").config();
const express = require("express");
const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");
const Userrouter = express.Router();

const User = require('../model/user');



Userrouter.get("/register", async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
      } catch (error) {
        res.json({ message: "could't not get data" });
      }
});

Userrouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const salt = bcryptjs.genSaltSync(1);
      const hash = bcryptjs.hashSync(password, salt);
  
      const data = await User.create({ name, email, password: hash });
      res.status(201).json(data);
    } catch (error) {
      res.json({ message: "could't not register data" });
    }
});

Userrouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const compare = bcryptjs.compareSync(password, user.password);
  
        if (compare) {
          var sign = jwt.sign(
            { id: user._id, name: user.name },
            process.env.key,
            {
              expiresIn: "24h",
            }
          );
         
  
          res.json({ token: sign,});
        } else {
          res.json({ message: "the password is not matched" });
        }
      } else {
        res.json({ message: "there is no registered data" });
      }
    } catch (error) {}
});




module.exports=Userrouter 