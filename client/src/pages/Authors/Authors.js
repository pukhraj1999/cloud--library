import AuthorCard from "./components/AuthorCard";

function Authors() {
  return (
    <>
      <h1 className="text-5xl font-serif font-bold text-center">
        Author Of Books
      </h1>
      <div className="flex justify-center">
        <div className="mx-4 my-4 grid grid-flow-row  gap-x-8 gap-y-8 lg:gap-x-10 lg:gap-y-4 grid-cols-2 lg:grid-cols-6 md:grid-cols-4">
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
        </div>
      </div>
    </>
  );
}

export default Authors;
