import React, { useState } from 'react';
import './postList.css';
import { posts } from './post';

function Post({ name, comment, time, avatar, onDelete }) {
  const [count, setCount] = useState(0); //1. 좋아요 useState
  return (
    <div className="comment">
      <img className="avatar" src={avatar} alt="user-avatar" />
      <div className="comment-details">
        <div className="user-name">{name}</div>
        <div className="comment-text">{comment}</div>
        <span onClick={() => setCount(count + 1)}>{' ♥️ '}</span> {/*2. <span>태그로 좋아요 추가 */}
        <span>{count}</span> {/*3. 좋아요 숫자 나타내기 */}
        <div className="comment-time">{time}</div>
      </div>
      <div>
        <button onClick={onDelete}>삭제</button> {/* 4. 삭제 버튼 */}
      </div>
    </div>
  );
}

export default function PostList2() {
  const [comments, setComments] = useState(posts); //1. useState초기화
  const handleDelete = (index) => {
    setComments((comments) => comments.filter((item, i) => i !== index));
  };
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Post
          key={index}
          name={comment.name}
          comment={comment.comment}
          time={comment.time}
          avatar={comment.avatar}
           onDelete={
            () => setComments((comments) => comments.filter((item, i) => i !== index))
          }
        />
      ))}
    </div>
  );
}
