import React from "react";
let user = { name: "soma", age: 20 };
let { name, age } = user;
const cars = ["Ford", "BMW", "Audi"];
let foo = ["one", "two", "three"];

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

export default function MapTest1() {
  return (
    <>
      <h1>foo 배열 출력하기</h1>
      <ul>
        <li>{foo[0]}</li>
        <li>{foo[1]}</li>
        <li>{foo[2]}</li>
        {foo.map((item)=>(
            <li>{item}</li>
        ))}
        
      </ul>
      <h1>차고에 있는 차 목록</h1>
      <ul>
        <Car brand ={cars[0]} />
        <Car brand ={cars[1]} />
        <Car brand ={cars[2]} />
        {/*cars 배열 요소를 Car컴포넌트의 brand로 전송하여 컴포넌트 리턴 */}
        {cars.map((car) =>(
          <Car brand = {car} />
        ))}
        
      </ul>
    </>
  );
}
