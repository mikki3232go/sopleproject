import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
function MyImage() {
  return <img src="https://i.imgur.com/ZF6s192.jpg" alt="myImage" />;
}
function Hello(props) {
  return (
    <main>
      <h1>Hello {props.user} World!</h1>
      <h3>{props.count}번째 방문입니다.</h3>
         
    </main>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Hello user="소마고" count="3" />);
root.render(<App />);
