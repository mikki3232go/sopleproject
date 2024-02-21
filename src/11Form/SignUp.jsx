import React, { useState } from "react";
function SignUp() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [confirm, setConfirm] = useState(false);
  function changeName(e) {
    setName(e.target.value);
  }
  function changeGender(e) {
    setGender(e.target.value);
  }
  const handleSubmit = (e) => {
    console.log(name, gender);
    setConfirm(!confirm);
    e.preventDefault();
  };
  return (
    <div>
      <h1>회원가입</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={changeName}
        value={name}
      />
      <select placeholder="Gender" onChange={changeGender} value={gender}>
        <option value="남">남</option>
        <option value="여">여</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
      {confirm && <div> {`가입한 이름은 ${name} 성별은 ${gender}입니다.`}</div>}
    </div>
  );
}
export default SignUp;
