import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;
function Accomodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, incr, decr] = useCounter(0);

  useEffect(() => {
    console.log("=========================");
    console.log("useEffect() is called.");
    console.log(`is Full : ${isFull}`);
  });
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 인원수 : ${count}`);
  }, [count]);
  return (
    <div>
      <p> {`총 ${count}명 수용했습니다.`}</p>
      <button onClick={incr} disabled={isFull}>
        입장
      </button>
      <button onClick={decr} disabled={count <= 0}>
        퇴장
      </button>
    </div>
  );
}
export default Accomodate;
