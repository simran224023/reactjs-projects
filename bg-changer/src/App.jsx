import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <h1 style={{ color: textColor }}>Background Color Changer</h1>

      <div className="button-class">
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            setColor("red");
            setTextColor("white");
          }}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => {
            setColor("green");
            setTextColor("white");
          }}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => {
            setColor("blue");
            setTextColor("white");
          }}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={() => {
            setColor("purple");
            setTextColor("white");
          }}
        >
          Purple
        </button>
        <button
          style={{ backgroundColor: "orange", color: "black" }}
          onClick={() => {
            setColor("orange");
            setTextColor("black");
          }}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "pink", color: "black" }}
          onClick={() => {
            setColor("pink");
            setTextColor("black");
          }}
        >
          Pink
        </button>
        <button
          style={{ backgroundColor: "brown", color: "white" }}
          onClick={() => {
            setColor("brown");
            setTextColor("white");
          }}
        >
          Brown
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => {
            setColor("black");
            setTextColor("white");
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
