import React from "react";

function AddBook() {
  return (
    <>
      <div className="my-10">
        <h1 className="text-6xl text-center font-serif">Add Book</h1>
        <form action="" className="">
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-2/4  px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex justify-center mt-6">
            <textarea
              className="lg:w-2/4 h-60 resize-none px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Description"
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
              placeholder="Name"
            />
          </div>
          <div className="flex justify-center mt-6">
            <select
              className="text-center lg:w-2/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              name=""
            >
              <option value="">Select Author</option>
              <option value="">A</option>
              <option value="">B</option>
            </select>
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-2/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Download Link"
            />
          </div>
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-2/4 px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Buy Link"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button className="rounded-2xl hover:bg-red-300 active:bg-white active:text-red-300 bg-indigo-300 text-white text-2xl px-2 py-2 font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBook;