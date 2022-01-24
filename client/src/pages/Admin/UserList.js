import React from "react";

function UserList() {
  return (
    <>
      <div className="my-10">
        <h1 className="text-6xl text-center font-serif">Users</h1>
        <div className="mt-10 mx-4">
          <div className="bg-gray-400 text-white shadow-2xl px-6 py-2 text-xl lg:text-3xl grid grid-cols-3">
            <h1 className="text-center">ID</h1>
            <h1 className="text-center">Name</h1>
            <h1 className="text-center">Email</h1>
          </div>
          <div className="items-center mt-6 shadow-2xl px-6 py-2 md:text-md lg:text-xl grid grid-cols-3">
            <h1 className="text-center">4495664</h1>
            <h1 className="text-center">pukhraj sdnadfnkjfdn</h1>
            <h1 className="text-center">a@gmail.com</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
