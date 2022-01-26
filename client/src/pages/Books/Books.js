import BookCard from "./components/BookCard";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { showBook } from "../../api/Api";

function Books() {
  const [data, setData] = useState(null);
  const preload = () => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    showBook(userId)
      .then((res) => {
        setData(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    preload();
  }, []);
  return (
    <>
      <h1 className="my-6 text-center text-6xl font-bold">Recent Books</h1>
      {!data && <Loading />}
      <div className="container mx-auto">
        <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
          {data &&
            data.map((item, key) => (
              <BookCard key={key} image={item.coverImg} bookId={item._id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Books;
