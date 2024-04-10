import {useRef, useState,useEffect} from "react";
import "./style.css";

const User = ({user, onRemove}) => {//3. props로 함수를 받음 객체를 받는 경우 {}로 받음  

  const {id, name, email} = user; 
  console.log(id,name, email);

  return(
      <div>
        <b>{name}</b> <span>{email}</span>
      
        <button onClick ={()=>onRemove(id)}>삭제</button>{/* 4. 삭제 버튼 클릭시 id를 인수로 remove 함수 호출  */} 
      </div>
    );
}

export default function UserDelete(){
    const [inputs, setInputs] = useState({
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
   
   const onChange =(e)=>{ //객체 요소 수정

    const {name, value} = e.target;
        setInputs({
        ...inputs,
        [name]: value,});
   
    };
   const onCreate =()=>{
      const user1 = {
        id : nextId.current,
        name,
        email,
     }
    setUsers([...users, user1]); //배열 복사하고 객체요소 추가

    nextId.current +=1;

    setInputs({
      name : '',
      email :'',
    })
  }
    const onRemove = ( id )=>{ //1. 삭제 함수 생성 (filter사용)
      const removeuser = users.filter(user => user.id !== id); //배열에서 조건이 만족하는 원소를 추출하여 새배열생성
      setUsers(removeuser);
    // setUsers(users.filter(user => user.id !== id)); //****{}하지 말것
       
    }
    
     return (
        <div>  
          <input name = "name" onChange={onChange} value={name} placeholder = "이름을 입력" />
          <input name = "email" onChange={onChange} value = {email}  placeholder = "이메일을 입력" />
          <button onClick ={onCreate}>등 록</button>
         {/* // <UserList users ={users} onRemove ={onRemove} />  */}
         {
         users.map(
           
            (user)=>{return <User user = {user} key = {user.id} onRemove={onRemove} />})  //2.onRemove함수 전달
                  
        }
        </div>
        );
       
  }
 