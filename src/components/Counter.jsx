import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = (props) => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.counter.value);

  const onClickIncrement = (event) => {
    dispatch({
      type: "INCREMENT",
      payload: {},
    });
  };

  const onClickDecrement = (event) => {
    dispatch({
      type: "DECREMENT",
      payload: {},
    });
  };

  return (
    <div className="App">
      <a href="/">Back to home</a>
      <h1>Counter Value: {value}</h1>

      <button onClick={onClickIncrement}>Increment</button>
      <button onClick={onClickDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
