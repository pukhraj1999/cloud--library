import React from "react";

function EditAuthor() {
  return (
    <>
      <div className="my-10">
        <h1 className="text-6xl text-center font-serif">Update Author</h1>
        <form action="" className="">
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-3/4  px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex justify-center mt-6">
            <textarea
              className="lg:w-3/4 h-60 resize-none px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button className="rounded-2xl hover:bg-red-300 active:bg-white active:text-red-300 bg-indigo-300 text-white text-2xl px-2 py-2 font-bold">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditAuthor;
