import React from "react";

function BookList() {
  return (
    <>
      <div className="my-10">
        <h1 className="text-6xl text-center font-serif">Books</h1>
        <div className="mt-10 mx-4">
          <div className="bg-gray-400 text-white shadow-2xl px-6 py-2 text-xl lg:text-3xl grid grid-cols-4">
            <h1 className="text-center">ID</h1>
            <h1 className="text-center">Name</h1>
            <h1 className="text-center">Author</h1>
            <h1 className="text-center">Operation</h1>
          </div>
          <div className="items-center mt-6 shadow-2xl px-6 py-2 md:text-md lg:text-xl grid grid-cols-4">
            <h1 className="text-center">4495664</h1>
            <h1 className="text-center">pukhraj sdmklfs</h1>
            <h1 className="text-center">heaven</h1>
            <div className="flex justify-center lg:space-x-6 space-x-3">
              <button className="text-orange-300">Edit</button>
              <button className="text-red-300">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookList;
