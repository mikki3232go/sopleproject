import { Fragment } from 'react';
import './mapTest3.css';
export const people = [
  {
    id: 0,
    name: '크레올라 캐서린 존슨',
    profession: '수학자',
    accomplishment: '우주비행 계산',
    imageId: 'MK3eW3A',
  },
  {
    id: 1,
    name: '마리오 호세 몰리나-파스켈 헨리케스',
    profession: '화학자',
    accomplishment: '북극 오존 홀 발견',
    imageId: 'mynHUSa',
  },
  {
    id: 2,
    name: '모하메드 압두스 살람',
    profession: '물리학자',
    accomplishment: '전자기학 이론',
    imageId: 'bE7W1ji',
  },
  {
    id: 3,
    name: '퍼시 레이본 줄리언',
    profession: '화학자',
    accomplishment: '코르티손 약물, 스테로이드 및 피임약 개발',
    imageId: 'IOjWm71',
  },
  {
    id: 4,
    name: '수브라흐마니안 찬드라세카르',
    profession: '천체물리학자',
    accomplishment: '백색 왜성의 질량 계산',
    imageId: 'lrWQx8l',
  },
];

// getImageUrl 함수 - person 객체를 받아 이미지 URL 생성
export function getImageUrl(person) {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}
function ListComponent({ title, lists }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {lists.map((person) => {
          return (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name} />
              <div className="card">
                <br />
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
// List 컴포넌트 - 과학자 목록을 출력
export default function MapTest4() {
  const chemists = people.filter((item) => item.profession == '화학자'); //1. 화학자 리스트 생성하기
  const etc = people.filter((item) => item.profession !== '화학자'); //2. 기타 리스트 생성하기

  return (
    <div>
      <h1>Scientists</h1>
      <ListComponent title="화학자들" lists={chemists} />

      <ListComponent title="기타" lists={etc} />
    </div>
  );
}
