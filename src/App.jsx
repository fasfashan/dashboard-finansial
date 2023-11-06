import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <h1>Hello wolrd</h1>
    </>
  );
}

export default App;
