import mongoose from "mongoose";
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    salt: {
      type: String,
    },
    encry_password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encry_password = this.securePasswd(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainPasswd) {
    return this.securePasswd(plainPasswd) === this.encry_password;
  },
  //used to encrypt password
  securePasswd: function (plainPasswd) {
    if (!plainPasswd) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPasswd)
        .digest("hex");
    } catch (error) {
      console.log(error);
      return "";
    }
  },
};

const User = new mongoose.model("USER", userSchema);

export default User;
