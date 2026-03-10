import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "1rem" }}>
      <p>You've clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        
        +1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "0.5rem", backgroundColor: "red" }}>
        
        Reset
      </button>
    </div>
  );
}

export default Counter;
