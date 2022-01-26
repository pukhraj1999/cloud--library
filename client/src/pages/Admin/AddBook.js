import React, { useState, useEffect } from "react";
import { showAuthor, addBook } from "../../api/Api";
import FileBase from "react-file-base64";

function AddBook() {
  const activateModal = () => {
    const toggle = document.getElementById("addBook");
    toggle.classList.toggle("hidden");
  };
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
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    showAuthor(userId)
      .then((res) => {
        setAuthorData(res.data.authors);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    addBook(data, userId)
      .then((res) => {
        setStatus({ success: "Successfully Added!!", error: "" });
        activateModal();
        setData({
          name: "",
          author: "",
          desc: "",
          coverImg: "",
          downloadLink: "",
          buyLink: "",
        });
      })
      .catch((err) => {
        setStatus({ error: err.response.data.error, success: "" });
        activateModal();
      });
  };
  return (
    <>
      <div
        style={{
          animation: "dropDown 1s ease-in-out",
        }}
        className="my-10"
      >
        <h1 className="text-6xl text-center font-serif">Add Book</h1>
        <form>
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-2/4 md:w-3/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <textarea
              className="lg:w-2/4 md:w-3/4 h-60 resize-none px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
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
              className="text-center md:w-3/4 lg:w-2/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              name="author"
              value={data.value}
              onChange={handleChange}
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
              className="lg:w-2/4 md:w-3/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Download Link"
              name="downloadLink"
              value={data.downloadLink}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-2/4 md:w-3/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
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
              Submit
            </button>
          </div>
        </form>
      </div>
      <div id="addBook" className="hidden modal">
        <div
          style={{ animation: "dropDown 0.7s ease-in-out" }}
          className=" mx-4 my-4 flex justify-center"
        >
          <div className="lg:w-[40rem] rounded-2xl bg-white text-black px-4 py-4">
            <h1 className="text-right">
              <i
                onClick={() => {
                  activateModal();
                }}
                className="hover:bg-yellow-300 active:bg-white active:text-yellow-300 rounded-full bg-indigo-300 text-white px-4 py-2 cursor-pointer fas fa-times"
              ></i>
            </h1>

            {status.success !== "" && (
              <h1 className="text-center text-2xl text-green-500 mt-4">
                {status.success}
              </h1>
            )}
            {status.error !== "" && (
              <h1 className="text-center text-2xl text-red-500 mt-4">
                {status.error}
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBook;
