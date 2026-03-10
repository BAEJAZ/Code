import React, { useState } from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import ShoppingList from "./components/ShoppingList";
import GuessGame from "./components/button"

function App() {
  const [user, setUser] = useState("Will");
  const [showList, setShowList] = useState(true);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}> 
      <h1>React Component Demo</h1>
      <Greeting name={user} />

      <Counter />

      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide" : "Show"} Shopping List
      </button>

      {showList && <ShoppingList />}
    </div>
  );
}

export default App;
