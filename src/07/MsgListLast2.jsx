import {useState,useRef} from "react";
import { MdEditNote } from "react-icons/md";
import "./style.css"
const msgs = [
    "안녕하세요. 오늘의 일정입니다.", 
    "점심시간이 11시 30분으로 변경되었습니다.",
    "이제 곧 회의가 시작됩니다."
  ];
const InputMsg = ({input,onChange,onCreate,onInit})=>{
  return (
    <div>

       <div class = "container">
        <input type="text" name ="msg" value = {input} onChange ={onChange}/>
        <button onClick ={onCreate}>등록</button>
        <button onClick ={onInit}>취소</button>
        </div>
    </div>
  )
}  
const Message = ({msg, id, onRemove, onModify})=>{
  return (
    <div   >
        <div class ="wrapper">{msg}
        <div class = "control">
        <button onClick = {()=>onRemove(id)}>삭제</button>   {/* 5. 삭제버튼 작성, 함수호출  */}
        <button onClick = {()=>onModify(id)}>수정</button>   {/* 6. 수정버튼 작성, 함수호출  */}
        </div>
        </div>

    </div>
  );
}
  
export default function MsgListLast(){
    const [input,setInput] = useState("");          //1. input을 반영할 스테이트 정의
    const [msgList, setmsgList] = useState(msgs);  //2. 리스트를 반영할 스테이트 정의
  //Message 컴포넌트 함수  
    const onCreate = ()=>{   
        setmsgList([...msgList, input]); //3. msgList배열에 추가하는 코드 작성
        console.log(msgList)

    }
    const onRemove = (id)=>{             //4. msgList배열을 삭제하는 코드 생성    
     const rmList = msgList.filter((msg,index) => index !== id );
     setmsgList(rmList);
    }
    
    const onModify = (id)=>{    //7. msgList배열을 수정하는 코드 생성
       const mdList = [...msgList];
       mdList[id] = input ;
       setmsgList(mdList);
    }
    //InputMsg 컴포넌트 함수
    const onChange = (e )=>{setInput(e.target.value)};
    const onInit =()=>setInput("");
    return (
        
    <div>
     <h1 > <MdEditNote/> 일정 관리 </h1>
      <InputMsg input = {input} onChange ={onChange} onCreate = {onCreate} onInit = {onInit} />
     
      
     {
            msgList.map((msg,index)=> {return(
              <Message msg = {msg} id = {index} onRemove = {onRemove} onModify={onModify} />          
        )
     })}
    </div>);

  }