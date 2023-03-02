import React from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8">
      Contacts{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        CLICK
      </button>
    </div>
  );
};

export default Contacts;
