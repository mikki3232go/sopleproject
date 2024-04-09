<<<<<<< HEAD
export default function ArrayInsert({username,email,onChange,onCreate}){
=======
export default CreateUser({username,email,onChange,onCreate}){
>>>>>>> c2c50644cff3fa83441744552344720b33c97ddb
    //https://react.vlpt.us/basic/13-array-insert.html
   
    return(
        <div>
        <input name = "username" onChange={onChange} value={username} />
        <input name = "email" onChange={onChange} value = {email} />
        <button onClick ={onCreate}>등록</button>

        </div>
    );
}