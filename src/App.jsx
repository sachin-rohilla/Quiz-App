import { useState } from "react";
import { SiRepublicofgamers } from "react-icons/si";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-96 h-96 border p-4 shadow-lg rounded-lg">
          <h1 className="flex items-center justify-center gap-2 font-semibold text-xl ">
            Quiz App
            <SiRepublicofgamers className="text-3xl" />
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
