import {useState} from "react";
const msgs = [
  "안녕하세요. 오늘의 일정입니다.", 
  "점심시간이 11시 30분으로 변경되었습니다.",
  "이제 곧 회의가 시작됩니다."
];
let targetId = 0;

export default function MsgListCRUD( ) {
  const [msgLists,setmsgLists]= useState(msgs);  //1. 입력하기 참조형
  const [input, setInput] = useState("");
  function onInsert(){
   
    let copy = msgLists; //렌더링이 일어나지 않는다.
     copy.push(input);
     setmsgLists(copy);
     console.log(msgLists); //배열은 값은 추가가 일어나고 있으나 렌더링은 되지 않는다. 이유는?
  // setmsgLists([...msgLists,input]); 

  }
  function onModify(){
    if (input){ //1.숙제
      let copy =[...msgLists]; //참조형이므로 copy = msgLists 하는 경우 state  변화없음(주소 동일)*** 중요
      copy[targetId] = input; 
      setmsgLists(copy);
      }
      else { //숙제
        alert("수정할 내용을 입력하세요.");
      }    
  }

  //Message 컴포넌트 구현하기
    function Message(props) {  
      
      const { msg, idx} = props;
    
     
      return (
        <div className="wrapper"  >
          {msg}
          <div className = "control">
           
            <span  onClick = {()=>{  //연필 누르면 수정될 데이터가 input창에 조회됨
                setInput(msgLists[idx]);
                targetId = idx;
            } }>🖋</span>&nbsp;&nbsp;&nbsp;
        
            <span onClick={onDelete}>🗑</span>
          </div> 
        </div>
      );
    }

  return (
    <div>
   {/* 컴포넌트 에 직접 속성값 주입하기  하드코딩하고 맵돌리기 */}
      {/* <Message
         
        msg={msgs[0]} idx ={0}
      ></Message> */}
      {/* 배열.map 함수로 컴포넌트에 속성값 주입하기  */}
      { 
        msgLists.map(
          (item,index) =>{return <Message key = {index} msg = {item} idx = {index}/> })
        
      }

      <div className = "container">
      <input  value ={input}  onChange={(e)=>{
        setInput(e.target.value) 

  
        }}/>
       
      <button onClick= {onInsert}>등록</button>
      <button onClick=  {onModify}>수정</button>
      <button onClick= {()=>{setInput("")}}>취소</button>
      </div>
    </div>
  );
}


