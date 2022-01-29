import { useState, useEffect } from "react";
import { getBook, showAuthor, updateBook } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

function UpdateBook({ bookId }) {
  const [authorData, setAuthorData] = useState(null);
  const [data, setData] = useState({
    name: "",
    author: "",
    desc: "",
    coverImg: "",
    downloadLink: "",
    buyLink: "",
  });
  const [status, setStatus] = useState({
    error: "",
    success: "",
  });
  const history = useNavigate();
  useEffect(() => {
    if (bookId) {
      getBook(bookId)
        .then((res) => {
          setData({
            ...data,
            ...res.data.book,
            author: res.data.book.author._id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      showAuthor()
        .then((res) => {
          setAuthorData(res.data.authors);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [bookId, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    updateBook(data, userId, bookId)
      .then((res) => {
        setStatus({ success: "Successfully Added!!", error: "" });
        displayError();
        setData({
          name: "",
          author: "",
          desc: "",
          coverImg: "",
          downloadLink: "",
          buyLink: "",
        });
        setTimeout(() => {
          history("/book/" + bookId);
        }, 500);
      })
      .catch((err) => {
        setStatus({ error: err.response.data.error, success: "" });
        displayError();
      });
  };
  const displayError = () => {
    const toggle = document.getElementById("updateBook");
    toggle.classList.toggle("hidden");
  };
  return (
    <>
      <div>
        <h1 className="text-6xl text-center font-serif">Update Book</h1>
        <div className="hidden" id="updateBook">
          <h1 className="text-center text-lg text-green-500">
            {status.success}
          </h1>
          <h1 className="text-center text-lg text-red-500">{status.error}</h1>
        </div>
        <form action="" className="">
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-3/4  px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <textarea
              className="lg:w-3/4 h-60 resize-none px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Description"
              name="desc"
              value={data.desc}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <div
              className="text-center text-indigo-300 
              lg:w-2/4 md:w-3/4 px-2 py-2 drop-shadow-lg
              bg-white outline-none text-xl
              file:border-0 file:rounded-full file:px-2
              file:py-2 file:bg-indigo-300 
              file:drop-shadow-lg
              file:text-white file:cursor-pointer
              hover:file:text-indigo-300
              hover:file:bg-white"
            >
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  setData({ ...data, coverImg: base64 });
                }}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <select
              className="text-center lg:w-3/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              name="author"
            >
              <option>Select Author</option>
              {authorData &&
                authorData.map((item, key) => (
                  <option key={key} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-3/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Download Link"
              name="downloadLink"
              value={data.downloadLink}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-3/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Buy Link"
              name="buyLink"
              value={data.buyLink}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={Submit}
              className="rounded-2xl hover:bg-red-300 active:bg-white active:text-red-300 bg-indigo-300 text-white text-2xl px-2 py-2 font-bold"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateBook;
