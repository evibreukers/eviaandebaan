import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Navigation from "./components/navigation";

function App() {
  const counter = useSelector((state) => state.counter);
  const answer = useSelector((state) => state.answer);
  const dispatch = useDispatch();

  return (
    <div id="main-container">
      <Navigation />
      <h1>{counter}</h1>
      <h1>{answer}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
