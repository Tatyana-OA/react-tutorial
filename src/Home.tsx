import React from "react";

import "./App.css";
import Example from "./Example/Example";

const Home = () => {
  return (
    <div className="App">
      <div className="card">
        <Example
          data={[
            { name: "Hi", age: 2, neshto: "neshto" },
            { name: "afasfsafa", age: 23, neshto: "neshto" },
          ]}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Home;
