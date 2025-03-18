mport React from "react";

let user = { name: "soma", age: 20 };
let { name, age } = user;
const cars = ["Ford", "BMW", "Audi"];
let foo = ["one", "two", "three"];

function Car(props) {
  return <li>I am a {props.brand}</li>;
}
function MapTest1() {
  return (
    <>
      <h1>foo 배열 출력하기</h1>
      <ul>
        {foo.map((item) => (
          // <Foo data={item} />
          <li>{item}</li>
        ))}
        {/*foo 배열에 있는 아이템들을 맵으로 요소 생성*/}
      </ul>
      <h1>차고에 있는 차 목록</h1>
      <ul>
        {/*cars 배열 요소를 Car컴포넌트의 brand로 전송하여 컴포넌트 리턴 */}
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}
export default MapTest1;

 
