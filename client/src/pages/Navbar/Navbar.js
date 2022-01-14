import Links from "./Links";
import "./Navbar.css";

function Navbar() {
  const displayMenu = () => {
    const toggler = document.getElementById("menu");
    toggler.classList.toggle("active");
  };
  return (
    <>
      <nav className="fixed w-[100%] top-0 bg-indigo-300 px-4 py-2 md:text-3xl text-2xl text-white font-bold ">
        <div>
          <h1 className="flex items-center drop-shadow-lg ">
            <i className="fab fa-2x fa-cloudversify mx-2"></i>
            <span>CloudLibrary</span>
          </h1>
        </div>
        <Links />
        {/* Moblie Icon */}
        <i
          className="menuIcon cursor-pointer hover:bg-indigo-500 hover:rounded-full active:bg-red-300 drop-shadow-lg px-4 py-4 fas fa-bars"
          onClick={() => {
            displayMenu();
          }}
        ></i>
      </nav>
      <div className="my-28"></div>
    </>
  );
}

export default Navbar;
