import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../loader/loading.css";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/terminal");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate])

  return (
    <div className="container">
      <div className="logo">
        <div className="name">abhayrsr</div>
        <div className="load">
          <div className="loader" id="l1"></div>
          <div className="loader" id="l2"></div>
          <div className="loader" id="l3"></div>
          <div className="loader" id="l4"></div>
          <div className="loader" id="l5"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
