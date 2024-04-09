import {useRef, useState} from "react";

const User = ({user}) => { //props로 객체를 받는 경우 {객체명}
    const {id, username, email } =  user; 
    
    console.log( username, email);
    return (
      <div>
  
        <b>{username}</b> <span>{email}</span>
        <button onClick ={()=> onRemove(id)}>삭제</button>
      </div>
    );
}
const CreateUser=({username,email,onChange,onCreate})=>{
    //https://react.vlpt.us/basic/13-array-insert.html
   
    return(
        <div>
        <input name = "username" onChange={onChange} value={username} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange} value = {email}  placeholder = "이메일을 입력" />
        <button onClick ={onCreate}>등록</button>

        </div>
    );
}
 
export default function UserAdd(){
    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ]);

    const [inputs, setInputs] =useState({
        username : '',
        email : '',
    });
   const {username, email} = inputs;
   const nextId = useRef(4);
   const onChange =(e)=>{ //객체 요소 수정
    const {name,value} = e.target;
        setInputs({
        ...inputs,
        [name]: value,});
   
 };
    const onCreate =()=>{
        const user1 ={
            id : nextId.current,
            username,
            email,
        }
   
        setUsers([...users, user1]); //배열 복사하고 요소 추가
    }
    nextId.current +=1;
     return (
        <div>
        <CreateUser username = {username} email = {email} onChange={onChange} onCreate={onCreate}/>
        {
         users.map(
           // (user)=>{return <User  username = {user.username} email = {user.email} />})
            (user)=>{return <User  user = {user} />})  //props로 객체를 주는 경우
                  
        }
        </div>
        );
       
  }
