import { useState } from "react";

function App() {
  // Step 1: create a piece of state for the colour
  const [isRed, setIsRed] = useState(false);

  // Step 2: toggle the state when the button is clicked
  function handleClick() {
    setIsRed(!isRed);
  }


  return (
    <div className="App">
      <h1>React Button Colour Changer</h1>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: isRed ? "red" : "blue",
          colour: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Change colour
      </button>
    </div>
  );
}

export default App;
