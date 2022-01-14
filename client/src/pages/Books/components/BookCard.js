import { NavLink } from "react-router-dom";
function BookCard() {
  return (
    <>
      <NavLink to="/book/1">
        <img
          className="hover:blur-sm  rounded-3xl"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457"
          alt=""
        />
      </NavLink>
    </>
  );
}

export default BookCard;
