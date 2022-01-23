import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Author = new mongoose.model("Author", AuthorSchema);

export default Author;
