
import "./styles.css";
import { useState } from "react";

//Message 컴포넌트 구현하기
function Message(props  ) {  
  
  const msg = props.msg;
  
  return (
    <div className="wrapper">
      {msg}
      <div className = "control">
        <span onClick={()=>{ }}>🖋</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick={()=>{}}>🗑</span>
      </div> 
    </div>
  );
}
export default Message; 
