import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Links() {
  const [user, setUser] = useState(false);
  const activateModal = () => {
    const toggle = document.getElementById("modal");
    toggle.classList.toggle("hidden");
  };
  useEffect(() => {
    if (localStorage.getItem("profile")) setUser(true);
  }, []);
  return (
    <>
      <div id="menu" className="nav__menu space-x-4 ">
        <NavLink
          className="cursor-pointer hover:bg-indigo-500 hover:rounded-full active:bg-red-300 drop-shadow-lg px-2 py-4 "
          to="/"
        >
          Books
        </NavLink>
        <NavLink
          className="cursor-pointer hover:bg-indigo-500 hover:rounded-full active:bg-red-300 drop-shadow-lg px-2 py-4 "
          to="/comics"
        >
          Comics
        </NavLink>
        <NavLink
          className="cursor-pointer hover:bg-indigo-500 hover:rounded-full active:bg-red-300 drop-shadow-lg px-2 py-4 "
          to="/authors"
        >
          Authors
        </NavLink>
        <span
          onClick={() => {
            activateModal();
          }}
          className="cursor-pointer hover:bg-indigo-500 hover:rounded-full active:bg-red-300 drop-shadow-lg px-2 py-4 "
        >
          Contribute
        </span>
        {!user && (
          <>
            <NavLink
              className="cursor-pointer hover:bg-indigo-500 hover:rounded-full active:bg-red-300 drop-shadow-lg px-2 py-4 "
              to="/signin"
            >
              Sign in
            </NavLink>
            <NavLink
              className="cursor-pointer hover:bg-indigo-500 hover:rounded-full active:bg-red-300 drop-shadow-lg px-4 py-4 "
              to="/signup"
            >
              Sign up
            </NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink
              className="cursor-pointer hover:bg-indigo-500 hover:rounded-full active:bg-red-300 drop-shadow-lg px-2 py-4 "
              to="/signout"
              onClick={() => {
                setTimeout(() => {
                  setUser(false);
                }, 200);
              }}
            >
              Sign out
            </NavLink>
          </>
        )}
      </div>
      {/* Css Modal */}
      <div id="modal" className="hidden modal">
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
            <h1>Do you want to contribute in our work?</h1>
            <h1 className="text-xl font-serif font-normal">
              If your answer is Yes,sign up to our website and start
              contributing now!!
            </h1>
            <h1 className="text-xl font-serif font-normal">
              Your name will be mentioned in our website and you also get some
              additional benifits.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Links;
