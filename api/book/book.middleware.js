import Book from "./book.model";
import path from "path";
import multer from "multer";
//---------Multer for file upload-----------------------------------------------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/bookCovers/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
export const uploadBookCover = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/svg"
    )
      cb(null, true);
    else {
      console.log("Only jpg and png support");
      cb(null, false);
    }
  },
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
});
//------------------------------------------------------------------------------------

//---------Book MIDDLEWARE------------------------------------------------------------
export const getBookById = (req, res, next, id) => {
  Book.findById(id, (err, book) => {
    if (err) return res.status(422).json({ error: "Book Not Found By ID" });
    req.book = book;
    next();
  });
};
//------------------------------------------------------------------------------------
