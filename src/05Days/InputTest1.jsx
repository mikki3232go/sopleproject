import { useState } from "react";
export default function InputTest1(){
    const user1= {
        id : 0,
        name : '',
        email:'',
    };
    const userAdd ={
        ...user1,
        email : 'abc@gmail.com',

    };
    console.log(userAdd);
    const [user, setUser] =useState(user1);//2. useState이용하여 객체 반영하기
    //user객체 생성하고 
 
    //user객체 복사하고 속성을 추가한 userAdd 객체 만들기
 
   
    return (

    <div>
       <form>
        <h1> 로그인</h1>

            <li >이름<input type = "text" onChange ={
                (e)=>setUser({
                    ...user,
                    name : e.target.value,
                }
                ) } value = {user.name}  /></li>
            <li>이메일<input type = "email" onChange ={
                (e)=>setUser({
                    ...user,
                    email : e.target.value,
                })
            } value = {user.email} /></li>
            {console.log(user)}
        <li><button type = "submit" action ="">확인 </button>
<button  onClick ={()=>setUser(
            {...user,
            id : 0,
            name:'',
            email : '',})
        }>취소</button></li>
     </form>
       {user.name && <div id = "modal">
             입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은 <span>{user.email}</span>
       </div>}
    </div>
);

}