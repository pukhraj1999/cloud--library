import Author from "./author.model";

//---------Author MIDDLEWARE------------------------------------------------------------
export const getAuthorById = (req, res, next, id) => {
  Author.findById(id, (err, book) => {
    if (err) return res.status(422).json({ error: "Author Not Found By ID" });
    req.author = author;
    next();
  });
};
//------------------------------------------------------------------------------------
