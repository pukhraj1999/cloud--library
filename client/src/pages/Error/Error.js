import crying from "../../assets/crying.gif";
function Error() {
  return (
    <>
      <h1 className="md:text-6xl text-3xl text-center">Page Not Exist!!</h1>
      <div className="my-5 flex justify-center">
        <img src={crying} alt="" />
      </div>
    </>
  );
}

export default Error;
