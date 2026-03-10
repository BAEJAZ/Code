import { useState } from "react";

function App() {

  const [color, setColor] = useState("red")

  function handleClick() {
    setColor((previousColor) => (previousColor === "red" ? "blue" : "red"))
    // if (color === "red") {
    //   setColor("blue")
    // }
    // else {
    //   setColor("red")
    // }
    // console.log(`675757`)
    
  }
  // Step 1: create a piece of state for the colour

  // Step 2: toggle the state when the button is clicked

  return ( //add onClick
    <div className="App">
      <h1>React Button Colour Changer</h1>
      <button
        style={{
          backgroundColor: color,
          colour: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >
		Click me to change colour
      </button>
    </div>
  );
}

export default App;
