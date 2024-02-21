import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function Boiling(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
  let input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  let output, rounded;
  try {
    output = convert(input);
    rounded = Math.round(output * 1000) / 1000;
  } catch (error) {
    return "숫자가 아닙니다.";
  }
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");
  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <main>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <Boiling celsius={parseFloat(celsius)} />
    </main>
  );
}
export default Calculator;
