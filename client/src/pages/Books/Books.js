import BookCard from "./components/BookCard";

function Books() {
  return (
    <>
      <h1 className="my-6 text-center text-6xl font-bold">Recent Books</h1>
      <div className="mx-12 my-12 flex justify-center">
        <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </>
  );
}

export default Books;
