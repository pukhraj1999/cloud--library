import { useParams } from "react-router-dom";
function Book() {
  const bookId = useParams();
  console.log(bookId.id);
  return (
    <>
      <div className="mx-6 my-12 flex flex-wrap justify-center">
        <div className="grid grid-flow-row md:grid-cols-2 grid-cols-1">
          <div className="flex justify-center">
            <img
              className="rounded-3xl"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457"
              alt=""
            />
          </div>
          <div className="drop-shadow-2xl h-fit bg-white my-12 lg:mx-6 flex-row  px-4 py-4 rounded-3xl">
            <h1 className="text-center text-5xl font-bold">
              The King of Drugs
            </h1>
            <div className="my-3 flex justify-between">
              <h2 className="my-3 text-xl font-bold">Date</h2>
              <h2 className="my-3 text-xl font-bold">By Author</h2>
            </div>
            <p className="text-xl lg:w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque accusantium commodi totam velit iste molestias!
              Similique, cupiditate dolorem nam recusandae sequi vel aperiam
              pariatur debitis! Facilis ad vitae aspernatur odio.
            </p>
            <div className="flex justify-between my-3 space-x-3">
              <a
                className="shadow-lg shadow-indigo-300/50 hover:bg-yellow-300 active:bg-white active:text-yellow-300 rounded-xl text-white text-2xl bg-indigo-300 px-2 py-2 "
                href="#"
              >
                Buy Now
              </a>
              <a
                className="shadow-lg shadow-indigo-300/50 hover:bg-green-300 active:bg-white active:text-green-300 rounded-xl text-white text-2xl bg-indigo-300 px-2 py-2 "
                href="#"
              >
                Download Pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
