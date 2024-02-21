import React, { useState } from "react";
//props로 단위와 온도를 받아서 표시해 주는 프로그램
const scaleNames = {
  c: "섭씨",
  f: "화씨",
};
function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <main>
      <fieldset>
        <legend>온도를 입력해 주세요.(단위:{scaleNames[props.scale]})</legend>
        <input value={props.temperature} onChange={handleChange} />
      </fieldset>
    </main>
  );
}
export default TemperatureInput;
