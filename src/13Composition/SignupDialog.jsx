//Composition  구현:자식컴포넌트 props.children,
//Specialization 구현 : props사용
import React, { useState } from "react";
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title"> {props.title}</h1>
      <p className="Dialog-message"> {props.message}</p>
      {props.children}
    </FancyBorder>
  );
}
function SignupDialog(props) {
  const [nickname, setNickname] = useState("");
  const handleChange = (e) => {
    setNickname(e.target.value);
  };
  const handleSignUp = () => {
    alert(`어서오세요, ${nickname}님`);
  };
  return (
    <Dialog title="화성탐사" message="닉네임을 입력해주세요.">
      <input type="text" value={nickname} onChange={handleChange} />
      <button onClick={handleSignUp}>회원가입</button>
    </Dialog>
  );
}

export default SignupDialog;
