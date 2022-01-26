import { NavLink } from "react-router-dom";
function BookCard({ image, bookId }) {
  return (
    <>
      <div className="mb-12 mx-4">
        <NavLink to={`/book/${bookId}`}>
          <img
            className="hover:blur-sm  rounded-3xl h-full w-full "
            src={
              image
                ? image
                : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457"
            }
            alt=""
          />
        </NavLink>
      </div>
    </>
  );
}

export default BookCard;
