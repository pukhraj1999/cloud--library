import { NavLink } from "react-router-dom";

function AuthorCard({ name, authorId }) {
  return (
    <>
      <NavLink to={`/author/${authorId}`}>
        <div className="hover:shadow-indigo-300/50 hover:shadow-lg rounded-3xl drop-shadow-2xl px-4 py-4 bg-white">
          <p className="w-fit px-4 py-2 rounded-full bg-red-300 text-white font-bold">
            {name[0]}
          </p>
          <h1 className="text-2xl md:text-4xl font-bold font-serif">{name}</h1>
          <div className="flex justify-evenly"></div>
        </div>
      </NavLink>
    </>
  );
}

export default AuthorCard;
