//로그인여부 값을 props로 받아서,조건부렌더링을 사용하여(환영메시지, 로그인/아웃버튼)을 나타내시오.
import Reat, { useState } from "react";
const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
  },
  greeting: {
    marginRight: 8,
  },
};
function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  console.log(
    props.isLoggedIn,
    " ",
    props.onClickLogin,
    " ",
    props.onClickLogout,
  );

  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인 </button>
      )}
    </div>
  );
}
export default Toolbar;
