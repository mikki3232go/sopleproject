import React, { useEffect, useState } from "react";
 

const MAX_CAPACITY = 10;

 const  useCounter = (init) => {
//  // const [count, setCount] = useState(init);

//   const incr  = () => setCount((count) => count + 1);
//   const decr  = () => setCount((count) => 
//     (count - 1));
//   return [count, incr, decr ];
}


function Accomodate(props) {
  const [isFull, setIsFull] = useState(false);
 // const [count, incr, decr] = useCounter(0);
 const [count, setCount] = useState(0);
  useEffect(() => { //리렌더링될대마다 실행
    console.log("=========================");
    console.log("컴포넌트 마운티드");
    
    
  },[]);
  useEffect(() => { //리렌더링될대마다 실행
    console.log("=========================");
    console.log("useEffect() is called.");
    console.log(`is Full : ${isFull}`);
  });


  useEffect(() => {  //count가 변경될때 실행
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 인원수 : ${count}`);
    return ()=>{console.log("클린업함수");
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
export default Accomodate;
