import React, { useState } from "react";

export default function ProfileForm() {
  // 중첩된 객체 구조를 갖는 상태 정의
  const [user, setUser] = useState({
    profile: {
      name: "",
      email: "",
    },
  });
 
const handleChange = (e) => {   //3. 반복부분 함수로 구현

    console.log(e.target)
    const name = e.target.name;
    const value = e.target.value;  //4. 구조분해 할당할것
    /* setUser({
        ...user,
        profile : {
            ...user.profile,
            [name]: value,

        }})도 가능 */
    setUser((prev)=>({
        ...prev,
        profile :{
            ...prev.profile,
            [name]: value,

        }}))
}
  // 간단한 form UI 구성
  return (
    <div style={{ padding: "20px" }}>
      <h2>프로필 수정</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>이름: </label>
          <input
            type="text"
            name="name"
            value={user.profile.name}
            onChange={(e)=>{                    //1. 이벤트 발생시 타겟 저장
                console.log(e.target.value)
                const name = e.target.name;
                const value = e.target.value;
                setUser((prev)=>({              //2. 스프레드연산자로 중복객체 복사
                    ...prev,
                    profile :{
                        ...prev.profile,
                        [name]: value,

                    }}))
            }}
          
          />
        </div>
        <div>
          <label>이메일: </label>
          <input
            type="email"
            name="email"
            value={user.profile.email}
            onChange={(e)=>{handleChange(e)     //5.함수 사용
                
            }}
          />
        </div>
      </form>

      <hr />

      {/* 변경된 결과를 바로 확인할 수 있도록 출력 */}
      <h3>입력 결과</h3>
      <p>이름: {user.profile.name}</p>
      <p>이메일: {user.profile.email}</p>
    </div>
  );
}
