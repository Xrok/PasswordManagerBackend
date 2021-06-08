import mongoose, { Model } from "mongoose";
import { UserInterface } from "../interface/user.interface";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  salt: {
    type: String,
    required: true,
    trim: true,
  },
});
const User: Model<UserInterface> = mongoose.model("User", userSchema, "users");

export { User };
