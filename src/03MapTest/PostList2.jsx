import React, { useState } from 'react';
import './postList.css';
import { posts } from './post';

function Post({ name, comment, time, avatar, onDelete }) {
  const [count, setCount] = useState(0);
  return (
    <div className="comment">
      <img className="avatar" src={avatar} alt="user-avatar" />
      <div className="comment-details">
        <div className="user-name">{name}</div>
        <div className="comment-text">{comment}</div>
        <span onClick={() => setCount(count + 1)}>{' ♥️ '}</span>
        <span>{count}</span>
        <div className="comment-time">{time}</div>
      </div>
      <div>
        <button onClick={onDelete}>삭제</button>
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
          onDelete={() => alert('렌더링시 출력')}
        />
      ))}
    </div>
  );
}
