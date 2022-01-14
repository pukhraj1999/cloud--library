import pic from "../../assets/signup.svg";
import Input from "./Input";

function Signup() {
  return (
    <>
      <div className="mx-6 my-36 flex flex-wrap justify-center">
        <div className="grid grid-flow-row md:grid-cols-2 grid-cols-1">
          <div className="flex justify-center">
            <img className="rounded-3xl" src={pic} alt="" />
          </div>
          <div className="space-y-4 drop-shadow-2xl h-fit bg-white my-12 lg:mx-6 flex-row  px-4 py-4 rounded-3xl">
            <h1 className="text-3xl font-serif text-center font-bold">
              Sign up
            </h1>
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email" />
            <Input label="Password" />
            <Input label="Confirm Password" />
            <div className="flex justify-center">
              <button className="rounded-2xl hover:bg-green-300 active:bg-white active:text-green-300 bg-indigo-300 text-white text-2xl px-2 py-2 font-bold">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
