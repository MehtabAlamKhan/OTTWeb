import express from "express"
const router = express.Router();import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res.status(400).send("User not Found");
  }

  bcrypt
    .compare(req.body.password, user.password)
    .then((isMatch) => {
      if (!isMatch) {
        return res.status(400).send("Password and Username Does not Match");
      }

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
    })
    .catch((err) => {
      res.json({ msg: "something went wrong" });
    });
});

export default router;
