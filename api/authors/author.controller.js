import Author from "./author.model";

//-----------CRUD OPERATION FOR Author-----------------------------------------------------
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json({ authors });
  } catch (err) {
    res.status(422).json({ error: err });
  }
};

export const getAuthor = (req, res) => {
  return res.json({ author: req.author });
};

export const createAuthor = (req, res) => {
  const { name, desc } = req.body;
  if (name === "" || desc === "")
    return res.status(422).json({ error: "Fill all the fields!!" });
  try {
    const author = new Author({
      name,
      desc,
    });
    author.save((err, author) => {
      if (err) res.status(400).json({ error: "Failed to save the author!!" });
      res.status(200).json({ msg: "Successfully Created!!", author });
    });
  } catch (err) {
    res.status(400).json({ error: "Failed to Save author!!" });
  }
};

export const updateAuthor = async (req, res) => {
  const { name, desc } = req.body;
  if (name === "" || desc === "")
    return res.status(422).json({ error: "Fill all the fields!!" });

  Author.findByIdAndUpdate(
    { _id: req.author._id },
    {
      $set: {
        name,
        desc,
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (error, author) => {
      if (error || !author)
        return res.status(400).json({ error: "author not found" });
      res.status(200).json({ msg: "Successfully Updated!!", author });
    }
  );
};

export const deleteAuthor = async (req, res) => {
  Author.findOneAndDelete(
    {
      _id: req.author._id,
    },
    (err, author) => {
      if (err)
        return res.status(400).json({ error: "Failed to Delete the author!!" });
      if (!author) return res.status(400).json({ error: "author Not Exist!!" });
      return res
        .status(200)
        .json({ msg: "Successfully Deleted!!", author: author });
    }
  );
};
//---------------------------------------------------------------------------------------
