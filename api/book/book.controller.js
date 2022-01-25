import Book from "./book.model";
import path from "path";
import fs from "fs";

//-----------CRUD OPERATION FOR Book-----------------------------------------------------
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author", "_id name");
    res.status(200).json({ books: books });
  } catch (err) {
    res.status(422).json({ error: err });
  }
};

export const getBook = (req, res) => {
  return res.json({ book: req.book });
};

export const createBook = (req, res) => {
  const { name, author, desc, buyLink, downloadLink } = req.body;
  if (
    name === "" ||
    author === "" ||
    desc === "" ||
    buyLink === "" ||
    downloadLink === ""
  )
    return res.status(422).json({ error: "Fill all the fields!!" });
  try {
    const book = new Book({
      name,
      author,
      desc,
      buyLink,
      downloadLink,
    });
    if (req.file) {
      book.coverImg = req.file.path;

      book.save((err, book) => {
        if (err) res.status(400).json({ error: "Failed to save the book!!" });
        return res.status(200).json({ msg: "Successfully Created!!", book });
      });
    }
  } catch (err) {
    return res.status(400).json({ error: "Failed to Save Book!!" });
  }
};

export const updateBook = async (req, res) => {
  const { name, author, desc, buyLink, downloadLink } = req.body;

  if (req.file)
    Book.findByIdAndUpdate(
      { _id: req.book._id },
      {
        $set: {
          name,
          author,
          desc,
          buyLink,
          downloadLink,
          coverImg: req.file.path,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      },
      (error, book) => {
        if (error || !book)
          return res.status(400).json({ error: "Book not found" });
        res.status(200).json({ msg: "Successfully Updated!!", book });
      }
    );
};
export const deleteBook = async (req, res) => {
  Book.findOneAndDelete(
    {
      _id: req.book._id,
    },
    (err, book) => {
      const filePath = book.coverImg;
      try {
        fs.unlinkSync(filePath);
      } catch (err) {
        return res.status(400).json({ error: err });
      }
      if (err)
        return res.status(400).json({ error: "Failed to Delete the Book!!" });
      if (!book) return res.status(400).json({ error: "Book Not Exist!!" });
      return res
        .status(200)
        .json({ msg: "Successfully Deleted!!", book: book });
    }
  );
};
//---------------------------------------------------------------------------------------
