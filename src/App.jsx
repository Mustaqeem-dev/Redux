import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented } from "./features/counter/counterSlice";
import { decremented } from "./features/counter/counterSlice";
function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  function handleclick() {
    dispatch(incremented());
  }
  function Dhandleclick() {
    dispatch(decremented());
  }
  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleclick}>inc button</button>
        <button onClick={Dhandleclick}>dec button</button>
        <p>count is {count}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
