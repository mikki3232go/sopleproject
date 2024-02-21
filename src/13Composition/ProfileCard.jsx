//Composition 구현 : 자식컴포넌트 props.children,
//Specialization 구현 : props사용
import React, { useState } from "react";
function Card(props) {
  const { title, backgroundColor, children } = props;
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}
function ProfileCard(props) {
  return (
    <Card title="리액트로 합성으로 만든 카드" backgroundColor="lightblue">
      <p>자식컴포넌트 첫번째입니다.</p>
      <p>자식컴포넌트 두번째입니다.</p>
    </Card>
  );
}
export default ProfileCard;
