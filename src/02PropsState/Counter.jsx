{/* <Counter.jsx>  */}
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);m
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}번 클릭했음</h2>
      <button onClick={() => setCount(count + 1)}> 클릭</button>
    </div>
  );
}
