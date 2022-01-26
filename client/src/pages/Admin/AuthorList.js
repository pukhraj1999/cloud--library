import { useState, useEffect } from "react";
import UpdateAuthor from "./UpdateAuthor";
import { showAuthor } from "../../api/Api";
import Loading from "../Loading/Loading";

function AuthorList() {
  const activateModal = () => {
    const toggle = document.getElementById("editAuthor");
    toggle.classList.toggle("hidden");
  };
  const [data, setData] = useState(null);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    showAuthor(userId)
      .then((res) => {
        setData(res.data.authors);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div
        style={{
          animation: "dropDown 1s ease-in-out",
        }}
        className="my-10"
      >
        <h1 className="text-6xl text-center font-serif">Authors</h1>
        {!data && <Loading />}
        <div className="mt-10 mx-4">
          {data && (
            <div className="bg-gray-400 text-white shadow-2xl px-6 py-2 text-xl lg:text-3xl grid grid-cols-3">
              <h1 className="text-center">ID</h1>
              <h1 className="text-center">Name</h1>
              <h1 className="text-center">Operation</h1>
            </div>
          )}
          {data &&
            data.map((item, key) => (
              <div
                key={key}
                className="items-center mt-6 shadow-2xl px-6 py-2 md:text-md lg:text-xl grid grid-cols-3"
              >
                <h1 className="text-center">{item._id}</h1>
                <h1 className="text-center">{item.name}</h1>
                <div className="flex justify-center lg:space-x-6 space-x-3">
                  <button
                    className="text-orange-300"
                    onClick={() => {
                      activateModal();
                    }}
                  >
                    Edit
                  </button>
                  <button className="text-red-300">Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div id="editAuthor" className="hidden modal">
        <div
          className=" mx-4 my-4 flex justify-center"
          style={{ animation: "dropDown 0.7s ease-in-out" }}
        >
          <div className="lg:w-[40rem] rounded-2xl bg-white text-black px-4 py-4">
            <h1 className="text-2xl text-right">
              <i
                onClick={() => {
                  activateModal();
                }}
                className="hover:bg-yellow-300 active:bg-white active:text-yellow-300 rounded-full bg-indigo-300 text-white px-4 py-2 cursor-pointer fas fa-times"
              ></i>
            </h1>
            <UpdateAuthor />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorList;
