import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      required: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "Author",
    },
    desc: {
      type: String,
      required: true,
    },
    coverImg: {
      type: String,
    },
    buyLink: {
      type: String,
      required: true,
    },
    downloadLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = new mongoose.model("Book", bookSchema);

export default Book;
