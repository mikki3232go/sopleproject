import {useState} from "react";

function Input1(){
    const [inputText, setInput]= useState("");
    return (
        <div style ={{textAlign : "center"}}>
            <input type = "text" onChange={(e)=>setInput(e.target.value)}/>
            <hr></hr>
            <h3>입력한 값은 <span style ={{color:'red'}}> {inputText} </span>입니다.</h3>
        </div>
    ); 
}
export default Input1;