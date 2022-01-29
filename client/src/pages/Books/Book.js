import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBook } from "../../api/Api";
import Loading from "../Loading/Loading";

function Book() {
  const bookId = useParams();
  const [data, setData] = useState(null);
  const [access, setAccess] = useState(true);
  const activateModal = () => {
    const toggle = document.getElementById("warning");
    toggle.classList.toggle("hidden");
  };
  useEffect(() => {
    getBook(bookId.id)
      .then((res) => {
        setData(res.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
    if (!localStorage.getItem("profile")) {
      activateModal();
      setAccess(false);
    }
  }, []);
  return (
    <>
      {!data && <Loading />}
      {data && (
        <div className="container mx-auto">
          <div className=" mx-5 grid lg:grid-cols-2 grid-cols-1 items-center">
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
            <div className="mx-2 drop-shadow-2xl h-fit bg-white my-12 lg:mx-6 flex-row  px-4 py-4 rounded-3xl">
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
                  href={access ? data.buyLink : ""}
                  target={access ? "_blank" : ""}
                  rel="noreferrer"
                >
                  Buy Now
                </a>
                <a
                  className="shadow-lg shadow-indigo-300/50 hover:bg-green-300 active:bg-white active:text-green-300 rounded-xl text-white text-2xl bg-indigo-300 px-2 py-2 "
                  href={access ? data.downloadLink : ""}
                  target={access ? "_blank" : ""}
                  rel="noreferrer"
                >
                  Download Pdf
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id="warning" className="hidden modal">
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
            <h1 className="text-center text-2xl text-yellow-500 mt-4">
              You Must Sign in First to download or Buy!!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
