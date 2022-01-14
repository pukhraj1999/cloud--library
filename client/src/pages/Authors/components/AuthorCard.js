import { NavLink } from "react-router-dom";

function AuthorCard() {
  return (
    <>
      <NavLink to="/author/1">
        <div className="hover:shadow-indigo-300/50 hover:shadow-lg rounded-3xl drop-shadow-2xl px-4 py-4 bg-white">
          <img
            className="w-fit px-4 py-2 rounded-full bg-red-300 text-white font-bold"
            src="dsd"
            alt="A"
          />
          <h1 className="text-4xl font-bold font-serif">Author Name</h1>
          <div className="flex justify-evenly"></div>
        </div>
      </NavLink>
    </>
  );
}

export default AuthorCard;
