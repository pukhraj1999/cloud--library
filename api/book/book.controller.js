import Book from "./book.model";

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

export const createBook = async (req, res) => {
  const { name, desc, author, coverImg, downloadLink, buyLink } = req.body;
  if (!name || !desc || !author || !coverImg || !downloadLink || !buyLink)
    return res.status(422).json({ error: "Fill all the fields!!" });
  try {
    const book = new Book({
      name,
      desc,
      author,
      coverImg,
      downloadLink,
      buyLink,
    });
    book.save((err, book) => {
      if (err || !book)
        return res.status(400).json({ error: "Saving book in DB failed!!" });
      return res.status(200).json(book);
    });
  } catch (err) {
    res.status(400).json({ error: "Saving book in DB failed!!" });
  }
};

export const updateBook = (req, res) => {
  const { name, desc, author, coverImg, downloadLink, buyLink } = req.body;
  if (!name || !desc || !author || !coverImg || !downloadLink || !buyLink)
    return res.status(422).json({ error: "Fill all the fields!!" });

  Book.findByIdAndUpdate(
    { _id: req.book._id },
    {
      $set: {
        name,
        desc,
        author,
        coverImg,
        downloadLink,
        buyLink,
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (error, book) => {
      if (error || !book)
        return res.status(400).json({ error: "Book not found!!" });
      return res.status(200).json({ msg: "Successfully Updated!!", author });
    }
  );
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
