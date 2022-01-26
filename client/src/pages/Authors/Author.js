import { useParams } from "react-router-dom";
import BookCard from "../Books/components/BookCard";
import { useState, useEffect } from "react";
import { getAuthor, showBook } from "../../api/Api";
import Loading from "../Loading/Loading";

function Author() {
  const authorId = useParams();
  const [data, setData] = useState(null);
  const [books, setBooks] = useState(null);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    getAuthor(userId, authorId.id)
      .then((res) => {
        setData(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
    showBook(userId)
      .then((res) => {
        setBooks(
          res.data.books.filter((book) => {
            return book.author._id === authorId.id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {data && (
        <div className="mx-4 my-4">
          <h1 className="font-serif text-5xl md:text-6xl text-center">
            {data.name}
          </h1>
          <p className="my-4 text-xl lg:text-3xl">{data.desc}</p>
          <h1 className="font-serif text-5xl md:text-6xl text-center">
            Books Written
          </h1>
          <div className="container mx-auto">
            <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
              {books &&
                books.map((item, key) => (
                  <BookCard key={key} image={item.coverImg} bookId={item._id} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Author;
