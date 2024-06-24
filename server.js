import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import video from "./routes/video.js";
import login from "./routes/login.js";
import register from "./routes/register.js";
import users from "./routes/users.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/video", video);
app.use("/api/user", register);
app.use("/api", users);
app.use("/api/user", login);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
