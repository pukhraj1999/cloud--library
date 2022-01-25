import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signout() {
  const history = useNavigate();
  useEffect(() => {
    localStorage.removeItem("profile");
    history("/");
  });
  return <></>;
}

export default Signout;
