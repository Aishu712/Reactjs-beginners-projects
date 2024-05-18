import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
let index = -1;

function App() {
  const [typecolor, settypecolor] = useState("#fff");
  function changeColor(){
    let hexList = [0, 1, 2, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      index = Math.floor(Math.random() * hexList.length);
      hexColor += hexList[index];
    }
    settypecolor(hexColor);
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: typecolor,
          fontSize: "17px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <button 
        style={{
          padding:"8px 15px",
          border:"2px solid black",
          borderRadius:"20px",
          fontWeight:"600",
          fontSize:"26px",
          boxShadow:"5px 5px black"
        }}
        onClick={changeColor}>Generate Random Color</button>
        <h3
          style={{
            fontSize: "40px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          hex-code:{typecolor}
        </h3>
      </div>
    </>
  );
}

export default App;
