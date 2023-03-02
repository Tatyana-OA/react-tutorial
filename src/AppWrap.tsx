import React from "react";
import { Link, Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";

const AppWrap = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex flex-row gap-3">
        <Link to="/" className="font-bold text-red-700">
          Home
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/news">News</Link>
      </div>
      <Outlet />
      <p>Footer</p>
    </>
  );
};

export default AppWrap;
