 import { useState } from "react";
 import "./styles.css";
 const Modal= ()=>{ 

  return (
      <div id = "modal">
       입력한 값은 <span style={{ color: "orangered" }}>{text}</span> 입니다.
      </div>
  );
}
export default function InputTest() {
  //  const [변수명, set함수명] = useState(초기값);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="App">
      
      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
    <button onClick ={()=>setText("")} >초기화 </button>
      </p>
      <hr />
    {text?<Modal/>:null}
    {/* {text &&<Modal/>} */}
    {/* {text || <Modal />} */}
    </div>
  );
}
