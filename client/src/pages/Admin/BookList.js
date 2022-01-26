import { useState, useEffect } from "react";
import UpdateBook from "./UpdateBook";
import { showBook, deleteBook } from "../../api/Api";
import Loading from "../Loading/Loading";

function BookList() {
  const activateModal = () => {
    const toggle = document.getElementById("editBook");
    toggle.classList.toggle("hidden");
  };
  const [data, setData] = useState(null);
  const [bookId, setBookId] = useState(null);
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
  const bookDelete = (bookId) => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    deleteBook(userId, bookId)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    preload();
  }, []);
  return (
    <>
      <div
        style={{
          animation: "dropDown 1s ease-in-out",
        }}
        className="my-10"
      >
        <h1 className="text-6xl text-center font-serif">Books</h1>
        {data && (
          <div className="mt-2 text-center">
            <button
              onClick={() => {
                preload();
              }}
              className="drop-shadow-lg hover:bg-white hover:text-red-300 rounded-full bg-red-300 text-white px-4 py-2"
            >
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
        )}
        {!data && <Loading />}
        <div className="mt-5 mx-4">
          {data && (
            <div className="bg-gray-400 text-white shadow-2xl px-6 py-2 text-xl lg:text-3xl grid md:grid-cols-4 grid-cols-1">
              <h1 className="text-center">ID</h1>
              <h1 className="text-center">Name</h1>
              <h1 className="text-center">Author</h1>
              <h1 className="text-center">Operation</h1>
            </div>
          )}
          {data &&
            data.map((item, key) => (
              <div
                key={key}
                className="items-center mt-6 shadow-2xl px-6 py-2 md:text-md lg:text-xl grid md:grid-cols-4 grid-cols-1"
              >
                <h1 className="text-center">{item._id}</h1>
                <h1 className="text-center">{item.name}</h1>
                <h1 className="text-center">{item.author.name}</h1>
                <div className="flex justify-center lg:space-x-6 space-x-3">
                  <button
                    className="text-orange-300"
                    onClick={() => {
                      setBookId(item._id);
                      activateModal();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      bookDelete(item._id);
                    }}
                    className="text-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div id="editBook" className="hidden modal">
        <div
          className=" mx-4 my-4 flex justify-center"
          style={{ animation: "dropDown 0.7s ease-in-out" }}
        >
          <div className="lg:w-[40rem] rounded-2xl bg-white text-black px-4 py-4">
            <h1 className="text-2xl text-right">
              <i
                onClick={() => {
                  activateModal();
                }}
                className="hover:bg-yellow-300 active:bg-white active:text-yellow-300 rounded-full bg-indigo-300 text-white px-4 py-2 cursor-pointer fas fa-times"
              ></i>
            </h1>
            <UpdateBook bookId={bookId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookList;
