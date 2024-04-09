import { useState,useRef } from "react";
import "./style.css";
const Modal= (props)=>{
  const {name, nickname,email }= props;
  return (
      <div id = "modal">
       이름은 <span>{name}</span>이고 닉네임은 <span>{nickname}  </span>, 이메일은 {email} 입니다.
      </div>
  );
}
export default function UseRefTest1() {
<<<<<<< HEAD
=======
 //  const [변수명, set함수명] = useState(초기값);
>>>>>>> c2c50644cff3fa83441744552344720b33c97ddb
 const nameInput = useRef(); //ureRef로 객체요소로 정의
 const [inputs, setInputs] = useState({
   name: '',
   nickname: '',
   email : '',
 });
const {name, nickname, email} = inputs;

 return (
<div>
 <form>
       <input
         name = "name" placeholder="이름을 입력"
         value={name}
         ref = {nameInput}
         type="text"
         onChange={(e) => setInputs({
           ...inputs,
           [e.target.name]:e.target.value,
         })}
       />
       <br/>
       <input
         name = "nickname" placeholder="닉네임을 입력"
         value={nickname}

         type="text"
         onChange={(e) => setInputs({
           ...inputs,
           [e.target.name]:e.target.value, //name 키를 가진 값을 value로 설정
         })}
       />
       <br/>
       <input
         name = "email" placeholder="이메일을 입력"
         value={email}
         type="email"
         onChange={(e) => setInputs({
           ...inputs,
           [e.target.name]:e.target.value, //name 키를 가진 값을 value로 설정
         })}
       />
       {console.log(inputs)}
       <br/>
      <button onClick ={()=> alert(nameInput.current.value+"입력이 완료되었습니다.")
       //ureRef 객체를 current로 참조
       } >등록</button>
   <button type ="reset" onClick ={()=>{
    setInputs({
     name : '',
     nickname : '',
     email:'',
   });
   nameInput.current.focus()}}>초기화 </button>
    </form>
   {/* {text?<Modal/>:null} */}
   {/* {text &&<Modal/>} */}
   {name && <Modal name ={ name} nickname = { nickname} email ={email}/>}
   </div>);
 
}