import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김민성",
    comment: "안녕하세요. 김민성입니다.",
  },
  {
    name: "박다온",
    comment: "리액트로 프로젝트 만들고 있습니다.",
  },
  {
    name: "백도준",
    comment: "리액트 재미있어요.",
  },
];
function CommentList(props) {
  return (
    <div>
      {/* 컴포넌트 에 직접 속성값 주입하기  */}
      <Comment
        name={"소마고"}
        comment={"안녕하세요 소마고 2학년 리액트 수강학생입니다."}
      ></Comment>
      {/* 배열.map 함수로 컴포넌트에 속성값 주입하기  */}
      {comments.map(function (comment) {
        return (
          <Comment name={comment.name} comment={comment.comment}></Comment>
        );
      })}
    </div>
  );
}
export default CommentList;
