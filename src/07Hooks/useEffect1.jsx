import React, { useState,useRef, useEffect } from "react";
import "./style.css";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [depname, setDepname] =useState("");
  const [modal, setModal] = useState(true) ;
 
 
  // useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐  
//   useEffect(() => {
//     console.log("렌더링 됨"); //렌더링 될때마다
//     console.log({name, nickname });
//   });
 
 // 1. 마운트될 때 한번만 실행하고 싶을 때
 //useEffect 이펙트함수를 맨 처음 렌더링될 때 한번만 실행 하려면 함수의 두 번째 파라미터로 빈 배열을 넣어줌

useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
    setTimeout(()=>{ setModal(false) }, 2000); //2초 후에 모달을 안보이게 함.
  }, []);
// 2. 특정 값이 업데이트될 때만 실행하고 싶을 때
// useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 줌

//  useEffect(() => {
//      console.log(name +'이 변경되었습니다.');
//    }, [depname]);

//3. 뒷정리하기
// 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환

useEffect(() => {
        
        console.log(`effect 함수- 변경 후 이름: ${depname}`);
     
     
    return () => {
        console.log(`cleanup 함수- 변경 전 이름: ${depname}`);
        //console.log(depname);
    };
  },[depname]);
// 컴포넌트가 나타날 때 콘솔에 effect가 나타나고, 사라질 때 cleanup이 나타남
// 렌더링될 때마다 뒷정리 함수가 계속 나타남
// 뒷정리 함수가 호출될 때는 업데이트되기 직전의 값을 보여 줌

// 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 비어 있는 배열을 넣음
  const onChangeName = e => {
     
     setName(e.target.value);
  };

const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}  /> 

        <input value={nickname} onChange={onChangeNickname} />
        <button onClick ={()=>setDepname(name)}>이름 출력</button>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
        {
            modal ?
            <div id = "modal">useEffect 실습입니다. </div> : null
        }
      </div>
    </div>
  );
};


export default Info;
 





