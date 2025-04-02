import {useRef, useState} from "react";
import "./style.css";
export default function UseRefAddcopy(){
	const [inputs, setInputs] = useState({
    name : '',
    email : '',
  });
    const {name, email} = inputs;
	  const [users, setUsers] = useState([
        {
          id: 1,
          name: '강민지',
          email: 'strongminji@gmail.com',
          selected : false, //3-1. 속성 추가
        },
        {
          id: 2,
          name: '정소울',
          email: 'soulright@bssm.hs.kr',
          selected : false,
        },
        {
          id: 3,
          name: '이승현',
          email: 'victorynow@example.com',
          selected : false,
        }
      ]);
    const nextId = useRef(4);//1-1. useRef로 4 설정
    const inputRef = useRef(); //1-2. useRef로 설정
    // nextId값 1 증가
    const onChange =(e)=>{ // 7. input에 반영될 state 수정
      const {name,value} = e.target;
          setInputs({
          ...inputs,
          [name]: value,});
      }
     //input값이 변경될때 iputs useState에 반영되도록 수정
      const onhandleDelete = (id)=>{ 
        setUsers(users.filter((item)=>item.id !== id))
      }
    
      return (
        <div>  
			
         <input name = "name" onChange={(e)=>{ // 4. input에 반영될 내용 수정 
          const {name,value} = e.target;
          console.log(e.target)
            setInputs({
            ...inputs,
            [name]: value,});} }
           value={name} ref={inputRef } placeholder = "이름을 입력" />{/* 1-3. useRef 연결 */}

        <input name = "email" onChange={onChange } value = {email}  placeholder = "이메일을 입력" /> {/* 1-4.  연결 */}
       
			  <button onClick ={()=>alert(inputRef.current.value) }>확인</button>    {/* 1-5. useRef로 값가져오기 */}
        <button onClick = {()=>{
          setInputs({...inputs, name:'',email:''})
          inputRef.current.focus();}}>초기화</button> {/* 1-6. input초기화하고 useRef로 값가져오기 */}
         <button onClick ={()=>{
              setUsers([...users, {id : nextId.current, name : inputs.name, email:inputs.email}])
              nextId.current +=1 }}>등록</button>    {/* 2-1. 추가버튼 만들기 */}  

        { //2-1. 조회버튼 만들기

          users.map((user)=>{ return (
                                    <li key = {user.id}>{user.id}{'  '}
                                    <span style ={{color : user.selected?'green':'black'}} 
                                          onClick = {()=> setUsers(
                                            users.map(item =>
                                              item.id === user.id ? {...item, selected :!item.selected} :item) )}>{/* 3-2. onToggle  */}
                                          {user.name}</span>{'  '}{user.email}  
                                      {/* <button onClick = {()=>{ setUsers(users.filter((item)=>item.id !== user.id))}}>삭제</button> */}
                                      <button onClick = {()=> onhandleDelete(user.id)}>삭제</button>
                                      <button onClick = {()=>{ setUsers(                      
                                                          users.map(item => user.id === item.id ?
                                                            {
                                                              ...item,
                                                              name : inputs.name,
                                                              email: inputs.email,
                                                            }
                                                            : item
                                                          )
                                                          
                                                      )}}>수정</button>  {/* 3-3. 수정하기  */}
                                    </li>)})
        }   
        
        
        </div>
        );
     }
       
  
