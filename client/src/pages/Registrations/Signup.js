import { useState } from "react";
import pic from "../../assets/signup.svg";
import Input from "./Input";
import { signup } from "../../api/Api";
import { useNavigate } from "react-router-dom";

function Signup() {
  const history = useNavigate();
  const activateModal = () => {
    const toggle = document.getElementById("signupModal");
    toggle.classList.toggle("hidden");
  };
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPasswd: "",
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
    signup(data)
      .then((res) => {
        setStatus({ ...status, success: "Successfully Registered!!" });
        activateModal();
        setTimeout(() => {
          history("/signin");
        }, 2000);
      })
      .catch((err) => {
        setStatus({ ...status, error: err.response.data.error });
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
          <form className="space-y-4 drop-shadow-2xl h-fit bg-white my-12 lg:mx-6 flex-row  px-4 py-4 rounded-3xl">
            <h1 className="text-4xl font-serif text-center font-bold">
              Sign up
            </h1>
            <Input
              onChange={handleChange}
              label="First Name"
              type="text"
              name="fname"
              value={data.fname}
            />
            <Input
              onChange={handleChange}
              label="Last Name"
              type="text"
              name="lname"
              value={data.lname}
            />
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
            <Input
              onChange={handleChange}
              label="Confirm Password"
              type="password"
              name="confirmPasswd"
              value={data.confirmPasswd}
            />
            <div className="flex justify-center">
              <button
                onClick={Submit}
                className="rounded-2xl hover:bg-green-300 active:bg-white active:text-green-300 bg-indigo-300 text-white text-2xl px-2 py-2 font-bold"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="signupModal" className="hidden modal">
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

export default Signup;
