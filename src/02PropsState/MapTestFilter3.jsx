function MapTest3() {
     
const ages = [32, 33, 16, 40];
const result = ages.filter((item)=>item >18);
const result2 = ages.filter((item) =>item !== 32);
const msgList = [
  "안녕하세요",
  "2학년 학생입니다",
  "리액트 수강생입니다."
];

let msgCopy=["dkfkgkgkg"];
console.log([...msgList,...msgCopy])  ;
  function checkAdult(age) {
    return age >= 18;
  }
   
    return (
      <>
       
        <h2>filter결과(18보다 큰 아이템)</h2>
        
          {
          result.map((item)=>
            <li>{item}</li>
          )}
          <h2>filter결과(32와 같지않은 아이템)</h2>
        
        {
          
          result2.map((item)=> <li>{item}</li>)
           
        }
           
      </>
    );
  }

  export default MapTest3;

 
<input onChange={(e)=>{ console.log(e.target.value) }}/>