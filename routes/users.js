import express from "express"
const router = express.Router();import User from "../models/users.model.js";
import auth from "../middleware/auth.js";
import registerValidation from "../userValidations.js";

router.post("/users", async (req, res) => {
  let msg = "";

  if (req.body.email) {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else msg = "allowed";
  }

  const usernameExist = await User.findOne({ username: req.body.username });
  if (usernameExist) return res.status(400).send("Username already exist");
  else msg = "allowed";

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist");
  else msg = "allowed";
  if (msg) res.status(200).send("allowed");
});

router.post("/user/bookmarks", auth, async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ msg: "no content" });
  }

  const data = {
    id: req.body.id,
    media_type: req.body.media_type,
  };

  User.findByIdAndUpdate(req.user.id)
    .then((user) => {
      user.updateOne(
        {
          $push: { bookmarks: { $each: [data] } },
        },
        (err) => {
          // console.log(err);
          if (!err) {
            return res.status(200).json(data);
          }
          res.status(400).json({ msg: "error" });
        }
      );
    })
    .catch((err) => {
      res.status(400).json({ msg: "error" });
    });
});

router.delete("/user/bookmarks", auth, async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ msg: "no content" });
  }
  // console.log(req.headers);
  User.findById(req.user.id)
    .then((user) => {
      user.updateOne(
        {
          $pull: { bookmarks: req.body },
        },
        (err) => {
          if (!err) {
            return res.status(200).json(req.body);
          }
          res.status(400).json({ msg: "error" });
        }
      );
    })
    .catch((err) => {
      res.status(400).json({ msg: "error" });
    });
});

router.post("/user/favorites", auth, async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ msg: "no content" });
  }

  const data = {
    id: req.body.id,
    media_type: req.body.media_type,
  };

  User.findByIdAndUpdate(req.user.id)
    .then((user) => {
      user.updateOne(
        {
          $push: { favorites: { $each: [data] } },
        },
        (err) => {
          // console.log(err);
          if (!err) {
            return res.status(200).json(data);
          }
          res.status(400).json({ msg: "error" });
        }
      );
    })
    .catch((err) => {
      res.status(400).json({ msg: "error" });
    });
});

router.delete("/user/favorites", auth, async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ msg: "no content" });
  }
  // console.log(req.headers);
  User.findById(req.user.id)
    .then((user) => {
      user.updateOne(
        {
          $pull: { favorites: req.body },
        },
        (err) => {
          if (!err) {
            return res.status(200).json(req.body);
          }
          res.status(400).json({ msg: "error" });
        }
      );
    })
    .catch((err) => {
      res.status(400).json({ msg: "error" });
    });
});

router.get("/getuser", auth, async (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user))
    .catch((err) => {
      res.json({ msg: "error" });
    });
});

export default router;
