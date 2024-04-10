import { useState } from "react";
import "./style.css";
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
const Modal= (props)=>{
  const {name, nickname,email }= props;
  return (
      <div id = "modal">
       이름은 <span>{name}</span>이고 닉네임은 <span>{nickname}  </span>, 이메일은 {email} 입니다.
      </div>
  );
}
export default function InputTest2() {
 //  const [변수명, set함수명] = useState(초기값);
 const [inputs, setInputs] = useState({
   name: '',
   nickname: '',
   email : '',
 });
const {name, nickname, email} = inputs;

 return (
   <div className="App">
     
     <p>
      <form>
       이름 <input
         name = "name" placeholder="이름을 입력"
         value={name}
         type="text"
         onChange={(e) => setInputs({
           ...inputs,
           [e.target.name]:e.target.value,
         })}
       />
       <br/>
       닉네임<input
         name = "nickname" placeholder="닉네임을 입력"
         value={nickname}
         type="text"
         onChange={(e) => setInputs({
           ...inputs,
           [e.target.name]:e.target.value, //name 키를 가진 값을 value로 설정
         })}
       />
       <br/>
       이메일<input
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
      <button type ="submit" action = "" onClick ={()=>alert("입력이 완료되었습니다.")
      } >등록 </button>
   <button type ="reset" action = "" onClick ={()=>setInputs({
     name : '',
     nickname : '',
     email:'',
   })} >초기화 </button>
   </form>
     </p>
     <hr />
   {/* {text?<Modal/>:null} */}
   {/* {text &&<Modal/>} */}
   {name && <Modal name ={ name} nickname = { nickname} email ={email}/>}
   
   </div>
 );
}

