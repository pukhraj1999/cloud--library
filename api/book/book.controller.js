import Book from "./book.model";
import formidable from "formidable"; //use to store files in DB
import _ from "lodash";
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
  let Form = new formidable.IncomingForm();
  Form.keepExtensions = true;

  Form.parse(req, (err, fields, file) => {
    if (err) return res.status(400).json({ error: "Problem with image!!!" });

    const { name, desc, author, buyLink, downloadLink } = fields;

    if (!name || !desc || !author || !buyLink || !downloadLink)
      return res.status(400).json({ error: "Must include all fields!!!" });

    let book = new Book(fields);

    console.log(file.coverImg.mimetype);
    //handle files [photo is the name give to file by us]
    if (file.coverImg) {
      if (file.coverImg.size > 3 * 1024 * 1024)
        //covert 3 mb in bytes
        return res
          .status(400)
          .json({ error: "File size mush be less than 3MB!!" });
      //storing file in product model
      book.coverImg.data = fs.readFileSync(file.coverImg.filepath);
      book.coverImg.contentType = file.coverImg.mimetype;
    }

    //save in DB
    if (file.coverImg)
      book.save((err, book) => {
        if (err || !book)
          res.status(400).json({ error: "Saving book in DB failed!!" });
        res.status(200).json(book);
      });
  });
};

export const updateBook = async (req, res) => {
  let Form = new formidable.IncomingForm();
  Form.keepExtensions = true;

  Form.parse(req, (err, fields, file) => {
    if (err) return res.status(400).json({ error: "Problem with image!!" });

    //updation code
    let book = req.book;
    book = _.extend(book, fields); //deconstruct and fill the fields

    if (file.coverImg) {
      if (file.coverImg.size > 3 * 1024 * 1024)
        return res
          .status(400)
          .json({ error: "File size must be less than 3MB" });

      //storing file in product model
      file.coverImg.data = fs.readFileSync(file.coverImg.filepath);
      file.coverImg.contentType = file.coverImg.mimetype;
    }

    //save in DB
    book.save((err, book) => {
      if (err || !book)
        res.status(400).json({ error: "Updation of product in DB failed!!" });
      res.status(200).json(book);
    });
  });
};

export const deleteBook = async (req, res) => {
  Book.findOneAndDelete(
    {
      _id: req.book._id,
    },
    (err, book) => {
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
