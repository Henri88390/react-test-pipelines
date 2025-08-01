import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("effect");
    return () => console.log("cleanup");
  }, [count]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

export default App;
