//1. 이벤트 핸들러 사용하여 토글 버튼 만들기
//2. 매개변수 전달하기
//3. 이벤트 핸들러 사용하여 [확인하기]버튼 만들기
import React, { useState } from "react";
function Toggle(props) {
  const [isToogleOn, setIsToogleOn] = useState(false);
  //방법 1.함수 안에 함수로 정의
  function handleClick() {
    setIsToogleOn((isToogleOn) => !isToogleOn);
  }
  //방법2. 변수에 애로우함수로 정의
  //const handleClick = () => setIsToogleOn((isToogleOn) => !isToogleOn);
  const handleDelete = (id, evt) => console.log(id, evt.target);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => setIsConfirmed((isConfirmed) => !isConfirmed);

  return (
    <div>
      <button onClick={handleClick}> {isToogleOn ? "켜짐" : "꺼짐"}</button>
      <p />
      <button onClick={(evt) => handleDelete(1, evt)}>삭제하기</button>
      <p />
      <button onClick={handleConfirm} disabled={isConfirmed}>
        {" "}
        {isConfirmed ? "확인됨" : "확인하기"}
      </button>
    </div>
  );
}
export default Toggle;
