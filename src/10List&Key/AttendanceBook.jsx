//Students라는 배열로부터 학생 객체들을 받아 학생들의 이름으 목록형태로 출력하기
//Map이용하기
import React from "react";
const students = [
  { id: 1, name: "기안84" },
  { id: 2, name: "뷔" },
  { id: 3, name: "진" },
  { id: 4, name: "김정국" },
  { id: 5, name: "제이슨" },
];
function AttendanceBook(props) {
  return (
    <div>
      <ul>
        {students.map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
      <ul>
        {students.map((student, id) => {
          return (//list li태그에 키속성 값을 꼭 넣어줄것!!!!!
            <li key={student.id}> 
              {student.id}번째 학생은 {student.name}입니다.
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AttendanceBook;
