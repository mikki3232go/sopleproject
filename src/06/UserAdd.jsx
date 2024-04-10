import {useRef, useState} from "react";
import "./style.css";

const User = ({user}) => { //props로 객체를 받는 경우 {객체명}
    const {id, name, email } =  user; 
    
    console.log( name, email);
    return (
      <div>
  
        <b>{name}</b> <span>{email}</span>
        <button onClick ={()=> onRemove(id)}>삭제</button>
      </div>
    );
}
 
export default function UserAdd(){
  const [inputs, setInputs] =useState({
    name : '',
    email : '',
});
    const [users, setUsers] = useState([
        {
          id: 1,
          name: '강민지',
          email: 'strongminji@gmail.com'
        },
        {
          id: 2,
          name: '정소울',
          email: 'soulright@bssm.hs.kr'
        },
        {
          id: 3,
          name: '이승현',
          email: 'victorynow@example.com'
        }
      ]);

  
   const {name, email} = inputs;
   const nextId = useRef(4);

   const onChange =(e)=>{ //input에 반영될 내용 수정
    const {name,value} = e.target;
        setInputs({
        ...inputs,
        [name]: value,});
   
 };
    const onCreate =()=>{
        const user1 ={
            id : nextId.current,
            name,
            email,
        }
   
        setUsers([...users, user1]); //배열 복사하고 요소 추가
    }
    nextId.current +=1;
     return (
        <div>  
        <input name = "name" onChange={onChange} value={name} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange} value = {email}  placeholder = "이메일을 입력" />
        <button onClick ={onCreate}>등록</button>  
        {
         users.map(
            (user)=>{return <User  user = {user} />})  //props로 객체를 주는 경우
          // user=><User  user = {user} />)  //인수가 하나일때, 명령줄이 한줄일때 리턴과 중괄호는 생략 가능함.
                  
        }
        </div>
        );
       
  }
