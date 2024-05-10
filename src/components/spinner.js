import React from "react";
import loading from "./loading.gif";

const class = () =>{
    return (
      <div
        className="d-flex align-items-center"
        style={{ minHeight: "100vh", justifyContent: "center" }}
      >
        <img src={loading} alt="loading..." />
      </div>
    );
}

export default spinner;
