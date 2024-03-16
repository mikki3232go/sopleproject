import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  let cnt = 0;
  return (
    <div>
      <h1>일반변수{cnt} </h1>
      <h1>state변수{count} </h1>
      <button onClick={() => console.log(cnt++)}> +</button>
      <button onClick={() => setCount(count - 1)}> -</button>
      <p />
      <button onClick={() => setCount(0)}> 초기화</button>
    </div>
  );
}
