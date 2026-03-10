import { useState } from "react";
import Controls from "./components/Controls.jsx";
import Text from "./components/Text.jsx";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [updates, setUpdates] = useState(0);

  return (
    <div className="app">
      <h1>React Lifecycle Demo</h1>
      <h2>Open the console to see output</h2>

      <Controls
        handleMount={() => setMounted(true)}
        handleUnmount={() => setMounted(false)}
        handleUpdate={() => setUpdates((number) => number + 1)}
        mounted={mounted}
      />

      {/* Conditionally render <Text> to demonstrate mount and unmount */}
      {mounted && <Text updates={updates} reset={() => setUpdates(0)} />}
    </div>
  );
}
