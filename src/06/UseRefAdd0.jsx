//인라인함수 사용, 구조분해 할당 미사용
import {useRef, useState} from "react";
import "./style.css";
export default function UseRefAdd(){
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
    const nextId = useRef(4); //useRef로 4 설정
    const inputRef = useRef();//useRef로 설정
    // nextId값 1 증가
	const onChange =(e)=>{
         setInputs({...inputs, [e.target.name]:e.target.value})}; //input값이 변경될때 iputs useState에 반영되도록 수정	
     return (
        <div>  
			
        <input name = "name" 
        onChange= {(e)=>{ setInputs({...inputs, [e.target.name]:e.target.value})

        } } value={inputs.name} ref={inputRef} placeholder = "이름을 입력" />
        <input name = "email" onChange = { onChange  } value = {inputs.email}  placeholder = "이메일을 입력" />
       
        <button onClick ={()=>alert(inputRef.current.value) }>확인</button>   
        <button onClick = {()=>{
            inputRef.current.focus();//이름칸에 포커스
            setInputs({name:'',email:''})        
        }}>초기화</button>  
        
        
        </div>
        );
    }
