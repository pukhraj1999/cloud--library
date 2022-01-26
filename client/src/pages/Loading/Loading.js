import React from "react";
import loading from "../../assets/loading.gif";

function Loading() {
  return (
    <div className="mt-5 flex justify-center">
      <img src={loading} alt="" />
    </div>
  );
}

export default Loading;
