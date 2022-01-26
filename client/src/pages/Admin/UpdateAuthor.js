import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthor, updateAuthor } from "../../api/Api";

function UpdateAuthor({ authorId }) {
  const [data, setData] = useState({
    name: "",
    desc: "",
  });
  const [status, setStatus] = useState({
    error: "",
    success: "",
  });
  const history = useNavigate();
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    if (authorId) {
      getAuthor(userId, authorId)
        .then((res) => {
          setData({
            ...data,
            ...res.data.author,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [authorId]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    updateAuthor(data, userId, authorId)
      .then((res) => {
        setStatus({ success: "Successfully Added!!", error: "" });
        displayError();
        setData({
          name: "",
          desc: "",
        });
        setTimeout(() => {
          history("/author/" + authorId);
        }, 500);
      })
      .catch((err) => {
        setStatus({ error: err.response.data.error, success: "" });
        displayError();
      });
  };
  const displayError = () => {
    const toggle = document.getElementById("updateAuthor");
    toggle.classList.toggle("hidden");
  };
  return (
    <>
      <div className="my-10">
        <h1 className="text-6xl text-center font-serif">Update Author</h1>
        <div className="hidden" id="updateAuthor">
          <h1 className="text-center text-lg text-green-500">
            {status.success}
          </h1>
          <h1 className="text-center text-lg text-red-500">{status.error}</h1>
        </div>
        <form action="" className="">
          <div className="flex justify-center mt-6">
            <input
              className="lg:w-3/4  px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <textarea
              className="lg:w-3/4 h-60 resize-none px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
              type="text"
              placeholder="Description"
              name="desc"
              value={data.desc}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={Submit}
              className="rounded-2xl hover:bg-red-300 active:bg-white active:text-red-300 bg-indigo-300 text-white text-2xl px-2 py-2 font-bold"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateAuthor;
