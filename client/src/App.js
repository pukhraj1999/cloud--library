import { Routes, Route } from "react-router-dom";
import Author from "./pages/Authors/Author.js";
import Authors from "./pages/Authors/Authors.js";
import Book from "./pages/Books/Book.js";
import Books from "./pages/Books/Books.js";
import Comics from "./pages/Comics/Comics.js";
import Navbar from "./pages/Navbar/Navbar.js";
import Signin from "./pages/Registrations/Signin.js";
import Signup from "./pages/Registrations/Signup.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/book/:id" element={<Book />} />
        <Route exact path="/comics" element={<Comics />} />
        <Route exact path="/authors" element={<Authors />} />
        <Route exact path="/author/:id" element={<Author />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
