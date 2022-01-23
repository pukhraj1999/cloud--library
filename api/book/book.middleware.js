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
      cb(
        {
          success: false,
          error: "Invalid file type. Only jpg, png image files are allowed.",
        },
        false
      );
    }
  },
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
}).single("coverImg");
const handleFileErrors = (req, res, next) => {
  uploadBookCover(req, res, function (err) {
    if (err) {
      res.status(500);
      if (err.code == "LIMIT_FILE_SIZE") {
        err.error = "File Size is too large. Allowed file size is 2MB";
        err.success = false;
      }
      return res.json(err);
    } else {
      if (!req.file) {
        res.status(500);
        res.json("file not found");
      }
      next();
    }
  });
};
export const uploadCover = (req, res, next) => {
  handleFileErrors(req, res, next);
};
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
