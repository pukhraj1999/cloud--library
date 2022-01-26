import { NavLink } from "react-router-dom";
function BookCard({ image, bookId }) {
  return (
    <>
      <NavLink to={`/book/${bookId}`}>
        <img
          className="hover:blur-sm  rounded-3xl h-full md:h-3/4 lg:h-3/4 w-full "
          src={
            image
              ? image
              : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457"
          }
          alt=""
        />
      </NavLink>
    </>
  );
}

export default BookCard;
