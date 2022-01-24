import React from "react";
import UserList from "./UserList";
import AddBook from "./AddBook";
import AddAuthor from "./AddAuthor";
import UpdateBook from "./UpdateBook";
import UpdateAuthor from "./UpdateAuthor";
import BookList from "./BookList";
import AuthorList from "./AuthorList";

function Admin() {
  return (
    <>
      <div className="font-serif flex justify-center">
        <button className="active:text-indigo-300 shadow-2xl hover:bg-white hover:text-red-300 text-center px-4 py-1  text-6xl bg-red-300 text-white rounded-full">
          A
        </button>
      </div>
      <UserList />
      {/* <BookList /> */}
      {/* <AuthorList /> */}
      {/* <AddBook /> */}
      {/* <AddAuthor /> */}
    </>
  );
}

export default Admin;
