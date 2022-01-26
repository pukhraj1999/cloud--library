import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBook } from "../../api/Api";
import Loading from "../Loading/Loading";

function Book() {
  const bookId = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    getBook(userId, bookId.id)
      .then((res) => {
        setData(res.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {!data && <Loading />}
      {data && (
        <div className="mx-6 my-12 flex flex-wrap justify-center">
          <div className="grid grid-flow-row lg:grid-cols-2 grid-cols-1 items-center">
            <div className="flex justify-center">
              <img
                className="rounded-3xl h-full w-3/4 md:h-[600px] lg:h-[800px]"
                src={
                  data.coverImg
                    ? data.coverImg
                    : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457"
                }
                alt=""
              />
            </div>
            <div className="drop-shadow-2xl h-fit bg-white my-12 lg:mx-6 flex-row  px-4 py-4 rounded-3xl">
              <h1 className="text-center lg:text-5xl md:text-3xl text-3xl font-bold">
                {data.name}
              </h1>
              <div className="my-3 flex justify-between">
                <h2 className="my-3 text-sm lg:text-xl md:text-lg font-bold">
                  {new Date()
                    .toUTCString(data.createdAt)
                    .slice(0, data.createdAt.length - 11)}
                </h2>
                <h2 className="my-3 text-sm lg:text-xl md:text-lg font-bold">
                  By {data.author.name}
                </h2>
              </div>
              <p className="text-md lg:text-2xl md:text-lg ">{data.desc}</p>
              <div className="flex justify-between my-3 space-x-3">
                <a
                  className="shadow-lg shadow-indigo-300/50 hover:bg-yellow-300 active:bg-white active:text-yellow-300 rounded-xl text-white text-2xl bg-indigo-300 px-2 py-2 "
                  href={data.buyLink}
                  target="_blank"
                >
                  Buy Now
                </a>
                <a
                  className="shadow-lg shadow-indigo-300/50 hover:bg-green-300 active:bg-white active:text-green-300 rounded-xl text-white text-2xl bg-indigo-300 px-2 py-2 "
                  href={data.downloadLink}
                  target="_blank"
                >
                  Download Pdf
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Book;
