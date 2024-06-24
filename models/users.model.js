import mongoose from "mongoose";
import mongodb from "mongodb"

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is Required"],
      min: [6, "Mininum 6 characters are required"],
      max: [25, "Max 25 characters are allowed"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Invalid Password"],
      min: [6, "Mininum 6 characters are required"],
      trim: true,
      max: 1024,
    },
    email: {
      type: String,
      required: [true, "Invalid Email"],
      max: 255,
      unique: true,
    },
    bookmarks: {
      type: Array,
      default: [],
      required: false,
      // unique: true,
      // sparse: true,
    },
    favorites: {
      type: Array,
      default: [],
      require: false,
      // unique: true,
      // sparse: true,
    },
    phoneNumber: {
      type: Number,
      required: false,
      dafault: null,
      
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
