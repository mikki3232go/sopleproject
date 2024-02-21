import React, { useState } from "react";
import Toolbar from "./Toolbar";
//Toolbar컴포넌트 이용하기
//1. useState훅을 이용하여 사용자의 로그인 여부를 관리
function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onClickLogin = () => setIsLoggedIn(true);
  const onClickLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div>모두 함께하는 리액트 공부</div>
    </div>
  );
}
export default LandingPage;
