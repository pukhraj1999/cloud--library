import { useState, useEffect } from "react";
import { showUser } from "../../api/Api";
import Loading from "../Loading/Loading";

function UserList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("profile")).user._id;
    showUser(userId)
      .then((res) => {
        setData(res.data.users);
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
        <h1 className="text-6xl text-center font-serif">Users</h1>
        {!data && <Loading />}
        <div className="mt-10 mx-4">
          {data && (
            <div className="bg-gray-400 text-white shadow-2xl px-6 py-2 text-xl lg:text-3xl grid md:grid-cols-3 grid-cols-1">
              <h1 className="text-center">ID</h1>
              <h1 className="text-center">Name</h1>
              <h1 className="text-center">Email</h1>
            </div>
          )}
          {data &&
            data.map((item, key) => (
              <div
                key={key}
                className="items-center mt-6 shadow-2xl px-6 py-2 md:text-md lg:text-xl grid md:grid-cols-3 grid-cols-1"
              >
                <h1 className="text-center">{item._id}</h1>
                <h1 className="text-center">{item.name}</h1>
                <h1 className="text-center">{item.email}</h1>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default UserList;
