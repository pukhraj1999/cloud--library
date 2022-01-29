import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin.js";
import Author from "./pages/Authors/Author.js";
import Authors from "./pages/Authors/Authors.js";
import Book from "./pages/Books/Book.js";
import Books from "./pages/Books/Books.js";
import Comics from "./pages/Comics/Comics.js";
import Error from "./pages/Error/Error.js";
import Navbar from "./pages/Navbar/Navbar.js";
import Signin from "./pages/Registrations/Signin.js";
import Signout from "./pages/Registrations/Signout.js";
import Signup from "./pages/Registrations/Signup.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/" element={<Books />} />
        <Route exact path="/book/:id" element={<Book />} />
        <Route exact path="/comics" element={<Comics />} />
        <Route exact path="/authors" element={<Authors />} />
        <Route exact path="/author/:id" element={<Author />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signout" element={<Signout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
