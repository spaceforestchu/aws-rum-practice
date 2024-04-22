import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add: count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Minus: count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
