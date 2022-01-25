import React, { useState } from "react";
import { addBook } from "../../api/Api";

function AddBook() {
  const activateModal = () => {
    const toggle = document.getElementById("addBook");
    toggle.classList.toggle("hidden");
  };
  const [data, setData] = useState({
    name: "",
    author: "",
    desc: "",
    coverImg: "",
    downloadLink: "",
    buyLink: "",
    formData: new FormData(),
  });
  const [status, setStatus] = useState({
    error: "",
    success: "",
  });
  const handleChange = (e) => {
    const { name } = e.target;
    const value = name === "coverImg" ? e.target.files[0] : e.target.value;
    data.formData.set(name, value);
    setData({ ...data, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    addBook(data.formData, userId)
      .then((res) => {
        setStatus({ success: "Successfully Added!!", error: "" });
        activateModal();
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
        <form action="" className="">
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-2/4  px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <textarea
              className="lg:w-2/4 h-60 resize-none px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Description"
              name="desc"
              value={data.desc}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="text-center text-indigo-300 
              lg:w-2/4 px-2 py-2 drop-shadow-lg
              bg-white outline-none text-xl
              file:border-0 file:rounded-full file:px-2
              file:py-2 file:bg-indigo-300 
              file:drop-shadow-lg
              file:text-white file:cursor-pointer
              hover:file:text-indigo-300
              hover:file:bg-white"
              type="file"
              placeholder="Choose an image"
              name="coverImg"
              accept="image"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <select
              className="text-center lg:w-2/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              name="author"
              value={data.value}
              onChange={handleChange}
            >
              <option>Select Author</option>
              <option value="61ed9f4a984cf1b52cc7af85">A</option>
              <option value="B">B</option>
            </select>
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-2/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Download Link"
              name="downloadLink"
              value={data.downloadLink}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-2/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
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
