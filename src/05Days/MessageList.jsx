import React from "react";
import Message from "./Message";

const msgs = ["안녕하세요. 오늘의 일정입니다.", "점심시간이 11시 30분으로 변경되었습니다.","이제 곧 회의가 시작됩니다."
   
];
function MessageList( ) {
  return (
    <div>

      {/* 1. 컴포넌트 에 직접 속성값 주입하기  */}
      <Message   
        msg={"안녕하세요 컴포넌트 속성에 직접 입력했습니다."} />
       

      {/* 2. 컴포넌트 배열 요소로 속성값 주입하기  */}
      <Message msg ={msgs[0]} />
      <Message msg ={msgs[1]} />
      <Message msg ={msgs[2]} />
      
      {/* 배열.map 함수로 컴포넌트에 속성값 주입하기  */}
      { 
        msgs.map(
          (item) =>{return <Message msg = {item} /> })    
      }
    </div>
  );
}
export default MessageList;
