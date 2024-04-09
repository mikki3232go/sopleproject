import {useRef, useState,useEffect} from "react";

const User = ({user, onRemove,onToggle}) => {//props로 객체를 받는 경우 {}로 받음

  const {id, username, email} = user; 
  console.log(id,username, email);

  return(
      <div>
        <b> style ={{cursor : 'pointer',color : user.active?'green':'black'}} {username}</b> 
        <span>{email}</span>
      
        <button onClick ={()=>onRemove(id)}>삭제</button>{/* 삭제 버튼 클릭시 id로 remove 함수 호출  */} 
      </div>
    );
}
const CreateUser=({username, email, onChange, onCreate, onRemove})=>{
 
   
    return(
        <div>
        <input name = "username" onChange={onChange} value={username} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange} value = {email}  placeholder = "이메일을 입력" />
        <button onClick ={onCreate}>등록</button>
    
        </div>
    );
}
const UserList =({users,onRemove})=>{ //User컴포넌트에 있는 onRemove함수 전달
  return(
  <div>
    {users.map(user=>(
     <User user ={user} key = {user.id} onRemove = {onRemove} /> 
    ))}
  </div>);
} 
export default function UserModify(){
    const [inputs, setInputs] = useState({
      username : '',
      email : '',
   });
    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active : true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active : false,
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active : false
        }
      ]);
      const nextId = useRef(4);
   const {username, email} = inputs;


   const onCreate =()=>{ 
      const user1 = {
        id : nextId.current,
        username,
        email,
     }
    setUsers([...users, user1]); //배열 복사하고 객체요소 추가

    nextId.current +=1;

    setInputs({
      username : '',
      email :'',
    })
  }
   const onChange =(e)=>{ //객체 요소 수정

    const {name, value} = e.target;
        setInputs({
        ...inputs,
        [name]: value,});
   
    };
    const onRemove = ( id )=>{
      console.log('id ' +id)
      const removeuser = users.filter(user => user.id !== id); //배열에서 조건이 만족하는 원소를 추출하여 새배열생성
      setUsers(removeuser);
    // setUsers(users.filter(user => user.id !== id)); //****{}하지 말것
       
    }
    const onToggle = (id)=>{
        setUsers(
            users.map(user => user.id ===id ?{
                ...user,
                active : !user.active}
               : user
            )
        )}
        
    };
     return (
        <div> {/* input의 username, email로 user객체 요소 렌더링, 컴포넌트에 수정,등록, 삭제 함수 전달 */}
          <CreateUser username = {username} email = {email} onChange={onChange} onCreate={onCreate}  /> 
         {/* // <UserList users ={users} onRemove ={onRemove} />  */}
         {
         users.map(
           // (user)=>{return <User  username = {user.username} email = {user.email} />})
            (user)=>{return <User user = {user} key = {user.id} onRemove={onRemove} onToggle ={onToggle}  />})  //2. User onToggle
                  
        }
        </div>
        );
       
  }
 