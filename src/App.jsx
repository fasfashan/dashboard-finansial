import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Metric from "./components/Metric";
import Transaction from "./components/Transactions";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex ">
      <Sidebar />
      <div className="grow p-6 bg-neutral-25 ">
        <Header />
        <Metric />
        <Transaction />
      </div>
    </div>
  );
}

export default App;
