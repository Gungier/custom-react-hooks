import React from "react";
import { useInc } from "../hooks/useInc";

const Increment = () => {
  const [volume, { dec, inc, reset }] = useInc({
    maxValue: 10,
    minValue: -10,
    step: 3,
    initial: 5,
  });
  return (
    <div>
      <h3>Volume</h3>
      <button onClick={dec}>-</button>
      {volume}
      <button onClick={inc}>+</button>
      <button onClick={reset}>Reset Volume</button>
    </div>
  );
};

export default Increment;
