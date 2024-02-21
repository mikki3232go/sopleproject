import React, { useState } from "react";
function useCounter(initialVaule) {
  const [count, setCount] = useState(initialVaule);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => Math.max(count - 1));
  return [count, increment, decrement];
}
export default useCounter;
