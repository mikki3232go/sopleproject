import React from "react";
import Message from "./Message";
const msgLists = ["안녕하세요. 오늘의 일정입니다.", "점심시간이 11시 30분으로 변경되었습니다.","이제 곧 회의가 시작됩니다."];
function Message(props) {  
  
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
function MessageList( ) {
  return (
    <div>
{/* // */}
{
  foo.map(
    (item) => {return (<li>{item}  </li>) })
}
{/*  */}

      {/* 컴포넌트 에 직접 속성값 주입하기  */}
      <Message
         
        msg={"안녕하세요 소마고 2학년 리액트 수강학생입니다."}
      ></Message>
      {/* 배열.map 함수로 컴포넌트에 속성값 주입하기  */}
      { 
        msgLists.map(
          (item) =>{return <Message msg = {item} /> })
        
      }
    </div>
  );
}
export default MessageList;
