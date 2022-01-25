import pic from "../../assets/signin.svg";
import Input from "./Input";
import { useState } from "react";
import { signin } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

function Signin() {
  const history = useNavigate();
  const activateModal = () => {
    const toggle = document.getElementById("signinModal");
    toggle.classList.toggle("hidden");
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({
    error: "",
    success: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    signin(data)
      .then((res) => {
        localStorage.setItem("profile", JSON.stringify(res.data));
        setStatus({ success: "Successfully Sign in!!", error: "" });
        activateModal();
        setTimeout(() => {
          if (JSON.parse(localStorage.getItem("profile")).user.role !== 0)
            history("/admin");
          else history("/");
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        setStatus({ error: err.response.data.error, success: "" });
        activateModal();
      });
  };
  return (
    <>
      <div className="mx-6 my-36 flex flex-wrap justify-center">
        <div className="grid grid-flow-row md:grid-cols-2 grid-cols-1">
          <div className="flex justify-center">
            <img className="rounded-3xl" src={pic} alt="" />
          </div>
          <div className="lg:my-20 space-y-4 drop-shadow-2xl h-fit bg-white my-12 lg:mx-6 flex-row  px-4 py-4 rounded-3xl">
            <h1 className="text-4xl font-serif text-center font-bold">
              Sign in
            </h1>
            <Input
              onChange={handleChange}
              label="Email"
              type="email"
              name="email"
              value={data.email}
            />
            <Input
              onChange={handleChange}
              label="Password"
              type="password"
              name="password"
              value={data.password}
            />
            <div className="flex justify-center">
              <button
                onClick={Submit}
                className="rounded-2xl hover:bg-green-300 active:bg-white active:text-green-300 bg-indigo-300 text-white text-2xl px-2 py-2 font-bold"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="signinModal" className="hidden modal">
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

            {status.success !== "" && (
              <h1 className="text-center text-2xl text-green-500 mt-4">
                {status.success}
              </h1>
            )}
            {status.error !== "" && (
              <h1 className="text-center text-2xl text-red-500 mt-4">
                {status.error}
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
