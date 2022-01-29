const Author = require("./author.model");

//---------Author MIDDLEWARE------------------------------------------------------------
exports.getAuthorById = (req, res, next, id) => {
  Author.findById(id, (err, author) => {
    if (err) return res.status(422).json({ error: "Author Not Found By ID" });
    req.author = author;
    next();
  });
};
//------------------------------------------------------------------------------------
