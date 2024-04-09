export default function ArrayInsert({username,email,onChange,onCreate}){
    //https://react.vlpt.us/basic/13-array-insert.html
   
    return(
        <div>
        <input name = "username" onChange={onChange} value={username} />
        <input name = "email" onChange={onChange} value = {email} />
        <button onClick ={onCreate}>등록</button>

        </div>
    );
}