import { useState } from "react";

export const useCounter = (initialValue: number, min: number = 0, max: number = 100) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count < max) setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > min) setCount((prev) => prev - 1);
  };

  return { count, increment, decrement, setCount };
};
