import React, { useState } from "react";
//import Toolbar from "./Toolbar";
import "./style.css";
//Toolbar컴포넌트 이용하기
//1. useState훅을 이용하여 사용자의 로그인 여부를 관리
function Toolbar(props) {
  const { login, onLogin, onLogout } = props;
 
  return (
      <div className ="wrapp">
      {login && <span className ="greeting">환영합니다!</span>}
      {login ? (
        <button className = "btn" onClick={onLogout}>로그아웃</button>
      ) : (
        <button className = "btn" onClick={onLogin}>로그인 </button>
      )}
    </div>
  );
}

export default function ConditionalR2() {
  const [login, setlogin] = useState(false);
  return (
    <div>
      <Toolbar 
        login={login}
        onLogin={()=>setlogin(true)}
        onLogout={()=>setlogin(false)}
      />
      <div  style ={{paddingTop : '8px' }}>모두 함께 리액트 공부</div>
    </div>
  );
}
 
