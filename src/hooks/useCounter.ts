import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return { count, increment, decrement };
};

export default useCounter;
