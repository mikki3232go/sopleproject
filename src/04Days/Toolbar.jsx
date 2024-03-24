//로그인여부 값을 props로 받아서, 조건부렌더링을 사용하여(환영메시지, 로그인/아웃버튼)을 나타내시오.
 
import "./style.css";

function Toolbar(props) {
  const { login, onLogin, onLogout } = props;
 
  return (
      <div className ="wrapp">
      {login && <span className ="greeting">환영합니다!</span>}
      {login ? (
        <button className = "btn" onClick={onLogout}>로그아웃</button>
      ) : (
        <button className = "btn" onClick={onLogin}>로그인 </button>
      )}
    </div>
  );
}
export default Toolbar;
