import React, { useEffect, useState } from "react";
function Counter(props) {
  const [count, setCount] = useState(0);
  //의존성 배열없이 사용시 렌더링될때마다 작동
  useEffect(() => {
    document.title = `총${count}번 클릭했습니다.`;
  });
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}번 클릭했음.</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;
