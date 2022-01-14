import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "./user.model";

//-----------User Authentication-----------------------------------------------------
export const signup = async (req, res) => {
  const { fname, lname, email, role, password, confirmPasswd } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      param: errors.array()[0].param,
      error: errors.array()[0].msg,
    });
  }

  try {
    const userExist = await User.findOne({
      email,
    });
    if (userExist) return res.status(400).json({ error: "User already exist" });
    if (password !== confirmPasswd)
      return res.status(400).json({ error: "Both Passwords are not Same!!" });
  } catch (err) {
    res.status(422).json({ error: err });
  }

  const user = new User({
    name: fname + " " + lname,
    email: email,
    role: role,
    password: password,
  });

  user.save((err, user) => {
    if (err) return res.status(400).json({ error: "Unable to save" + err });
    return res.json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  });
};

export const signin = (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({
      param: errors.array()[0].param,
      error: errors.array()[0].msg,
    });
  }

  User.findOne(
    {
      email: email,
    },
    (err, user) => {
      if (err || !user) return res.status(400).json("User Not Found!!");
      if (!user.authenticate(password))
        return res.status(401).json({ error: "Invalid Credentials!!" });
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);
      res.cookie("token", token, { expire: new Date() + 9999 });
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, name, email, role } });
    }
  );
};

export const signout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "user sign out successfully." });
};
//-----------------------------------------------------------------------------------

//-----------CRUD OPERATION FOR USER-----------------------------------------------------
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    users.map((user) => {
      user.salt = undefined;
      user.encry_password = undefined;
      user.createdAt = undefined;
      user.updatedAt = undefined;
    });
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(422).json({ error: err });
  }
};

export const getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json({ user: req.profile });
};

export const updateUser = async (req, res) => {
  const { name, email, password, cofirmPasswd } = req.body;
  try {
    if (password !== confirmPasswd)
      return res.status(400).json({ error: "Both Passwords are not Same!!" });
  } catch (err) {
    res.status(422).json({ error: err });
  }
  try {
    const user = await User.findOneAndUpdate(
      {
        _id: profile._id,
      },
      {
        name,
        email,
        role,
        password,
      }
    );
    user.salt = undefined;
    user.encry_password = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined;
    res.status(422).json({ user: user });
  } catch (err) {
    res.status(422).json({ error: err });
  }
};
//---------------------------------------------------------------------------------------
