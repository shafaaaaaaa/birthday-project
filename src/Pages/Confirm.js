import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Confirm = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-xl font-extrabold">Are You Ready?</p>
        <a
          onClick={handleClick}
          className="font-sans font-semibold bg-sky-950 hover:bg-sky-900 text-md text-white px-5 py-1 border border-none rounded-full cursor-pointer shadow shadow-3xl"
        >
          Yes
        </a>
      </div>
    </div>
  );
};

export default Confirm;
