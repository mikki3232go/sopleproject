//useRef의 역할 : DOM 을 선택 , 컴포넌트 변수를 관리
//useRef특징 : 리렌더링 없음.바로 변수값 조회 가능
// -setTimeout, setInterval 을 통해서 만들어진 id
//-외부 라이브러리를 사용하여 생성된 인스턴스
//-scroll 위치     
//배열에 새 항목을 추가할건데, 새 항목에서 사용 할 고유 id 를 관리하는 useRef 예제 
import UserList from './UserList';

export default function useRefTest2() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };
  return <UserList users={users} />;
}

 