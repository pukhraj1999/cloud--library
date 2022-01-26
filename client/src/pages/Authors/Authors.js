import AuthorCard from "./components/AuthorCard";
import Loading from "../Loading/Loading";
import { showAuthor } from "../../api/Api";
import { useState, useEffect } from "react";

function Authors() {
  const [data, setData] = useState(null);
  const preload = () => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    showAuthor(userId)
      .then((res) => {
        setData(res.data.authors);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    preload();
  }, []);
  return (
    <>
      <h1 className="text-5xl font-serif font-bold text-center">
        Author Of Books
      </h1>
      {!data && <Loading />}
      <div className="mt-5 container mx-auto">
        <div className="flex flex-wrap justify-center items-center space-x-5 space-y-5">
          {data &&
            data.map((item, key) => (
              <AuthorCard key={key} name={item.name} authorId={item._id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Authors;
