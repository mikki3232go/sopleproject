import React, { useEffect, useState } from "react";

export default function useEffect2() {
  const [isFull, setIsFull] = useState(false);
 // const [count, incr, decr] = useCounter(0);
 const [count, setCount] = useState(0);
  useEffect(() => { //컴포넌트 마운트 될때 
    console.log("=========================");
    console.log("컴포넌트 마운티드");
     
  },[]);
  useEffect(() => { //리렌더링될대마다 실행
    console.log("=========================");
    console.log("useEffect가 실행됨");
    console.log(`is Full : ${isFull}`);
  });


  useEffect(() => {  //count가 변경될때 실행
    setIsFull(count >= 10);
    console.log(`현재 인원수 : ${count}`);
    return ()=>{console.log(`변경전 인원수 : ${count}`);
    console.log("=========================");
  }
  }, [count]);
  return (
    <div>
      <p> {`총 ${count}명 수용했습니다.`}</p>
      <button onClick={()=>setCount(count+1)} disabled={isFull}>
        입장
      </button>
      <button onClick={()=>setCount(count-1)} disabled={count <= 0}>
        퇴장
      </button>
    </div>
  );
}

