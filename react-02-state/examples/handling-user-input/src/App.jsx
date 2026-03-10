import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Handling User Input in React</h1>
      <input
        type="text"
        value={name}
        onInput={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'friend'}!</p>
    </div>
  );
}

export default App;

