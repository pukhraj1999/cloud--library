import Book from "./book.model";

//---------Book MIDDLEWARE------------------------------------------------------------
export const getBookById = (req, res, next, id) => {
  Book.findById(id, (err, book) => {
    if (err) return res.status(422).json({ error: "Book Not Found By ID" });
    req.book = book;
    next();
  });
};
//------------------------------------------------------------------------------------
