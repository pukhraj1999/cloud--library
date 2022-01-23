import Book from "./book.model";

//-----------CRUD OPERATION FOR Book-----------------------------------------------------
export const createBook = (req, res) => {
  const { name, author, desc, buyLink, downloadLink } = req.body;
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
    }
    book.save((err, book) => {
      if (err) res.status(400).json({ error: "Failed to save the book!!" });
      res.status(200).json({ book });
    });
  } catch (err) {
    res.status(400).json({ error: "Failed to Save Book!!" });
  }
};
//---------------------------------------------------------------------------------------
