import React from "react";
import "../loader/loading.css";

function Loading() {
  return (
    <div className="container">
      <div className="logo">
        <div className="name">abhayrsr</div>
        <div className="load">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
