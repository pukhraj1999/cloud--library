import React, { useState } from "react";
import UserList from "./UserList";
import AddBook from "./AddBook";
import AddAuthor from "./AddAuthor";
import BookList from "./BookList";
import AuthorList from "./AuthorList";

function Admin() {
  const [select, setSelect] = useState("0");
  const activateModal = () => {
    const toggle = document.getElementById("adminLinks");
    toggle.classList.toggle("hidden");
  };
  return (
    <>
      <div className="font-serif flex justify-center">
        <button
          onClick={() => activateModal()}
          className="active:text-indigo-300 shadow-2xl hover:bg-white hover:text-red-300 text-center px-4 py-1  text-6xl bg-red-300 text-white rounded-full"
        >
          A
        </button>
      </div>
      {select === "0" && <UserList />}
      {select === "1" && <BookList />}
      {select === "2" && <AuthorList />}
      {select === "3" && <AddBook />}
      {select === "4" && <AddAuthor />}
      {/* Model */}
      <div id="adminLinks" className="hidden modal">
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
            <div className="flex flex-col text-4xl items-center space-y-6 my-10">
              <button
                onClick={() => {
                  setSelect("0");
                }}
                className="bg-indigo-300 text-white px-4 py-2 rounded-full hover:bg-white hover:text-indigo-300 drop-shadow-2xl active:text-red-300"
              >
                Show Users
              </button>
              <button
                onClick={() => {
                  setSelect("1");
                }}
                className="bg-indigo-300 text-white px-4 py-2 rounded-full hover:bg-white hover:text-indigo-300 drop-shadow-2xl active:text-red-300"
              >
                Show Books
              </button>
              <button
                onClick={() => {
                  setSelect("2");
                }}
                className="bg-indigo-300 text-white px-4 py-2 rounded-full hover:bg-white hover:text-indigo-300 drop-shadow-2xl active:text-red-300"
              >
                Show Authors
              </button>
              <button
                onClick={() => {
                  setSelect("3");
                }}
                className="bg-indigo-300 text-white px-4 py-2 rounded-full hover:bg-white hover:text-indigo-300 drop-shadow-2xl active:text-red-300"
              >
                Add Books
              </button>
              <button
                onClick={() => {
                  setSelect("4");
                }}
                className="bg-indigo-300 text-white px-4 py-2 rounded-full hover:bg-white hover:text-indigo-300 drop-shadow-2xl active:text-red-300"
              >
                Add Authors
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
