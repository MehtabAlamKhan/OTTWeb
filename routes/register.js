import express from "express"
const router = express.Router();import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import registerValidation from "../userValidations.js";

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const usernameExist = await User.findOne({ username: req.body.username });
  if (usernameExist) return res.status(400).send("Username already exist");

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist");

  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const savedUser = await user.save().then((user) => {
      jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: user,
          });
        }
      );
    });
  } catch (e) {
    res.json({ msg: "Error creating user" });
  }
});

export default router;
