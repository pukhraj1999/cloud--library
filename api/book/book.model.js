import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = new mongoose.model("Book", bookSchema);

export default Book;
