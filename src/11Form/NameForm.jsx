import React, { useState } from "react";

function NameForm(props) {
  const [nameValue, setnameValue] = useState("");
  const [txtValue, settxtValue] = useState("");
  const [selectValue, setselectValue] = useState("");
  const [isComplete, setisComplete] = useState(false);
  const handlenameChange = (event) => {
    setnameValue(event.target.value.toUpperCase());
  };
  const handletxtChange = (event) => {
    settxtValue(event.target.value);
  };
  const handleselectChange = (event) => {
    setselectValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("입력한 이름: " + nameValue + "요청사항: " + txtValue);
    setisComplete(!isComplete);
    event.preventDefault(); //폼데이터가 서버로 전송되지 않음.
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>
              이 름:
              <input
                type="text"
                value={nameValue}
                onChange={handlenameChange}
              />
            </label>
          </li>
          <li>
            <label>
              요청사항:
              <textarea
                type="text"
                value={txtValue}
                onChange={handletxtChange}
              />
            </label>
          </li>
          <li>
            <label>
              과일 선택:
              <select value={selectValue} onChange={handleselectChange}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
                <option value="watermelon">수박</option>
                <option value="pineapple">파인애플</option>
              </select>
            </label>
          </li>
        </ul>
        <input type="submit" value="확인" onClick={handleSubmit} />
      </form>
      {isComplete && (
        <div>
          {`이름은 ${nameValue} 요청사항은 ${txtValue}, 과일은 ${selectValue}을 선택하셨습니다.`}
        </div>
      )}
    </main>
  );
}
export default NameForm;
