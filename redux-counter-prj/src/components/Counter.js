import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseNum, increaseNum } from "../reducer/counter";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <span>{count}</span>
      <button onClick={() => dispatch(increaseNum())}>+</button>
      <button onClick={() => dispatch(decreaseNum())}>-</button>
    </div>
  );
};

export default Counter;
