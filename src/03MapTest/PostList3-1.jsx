import React, { useState } from 'react';
import './postList.css';
import { posts } from './post';

function Post({ name, comment, time, avatar, likes, onDelete, onLike }) {
  const [count, setCount] = useState(0);

  return (
    <div className="comment">
      <img className="avatar" src={avatar} alt="user-avatar" />
      <div className="comment-details">
        <div className="user-name">{name}</div>
        <div className="comment-text">{comment}</div>

        <div className="comment-time">
          {time}
          {'   '}
          <span className="like-button" onClick={onLike}>
            {' ♥️ '}
          </span>
          <span className="like-count">{likes}</span>
        </div>
      </div>
      <div>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
}

export default function PostList31() {
  const [comments, setComments] = useState(posts); //1. 배열 데이터로 목록을 초기화
  const handleDelete = (index) => {
    setComments((comments) => comments.filter((item, i) => i !== index));
  };
  const handleLike = (index) => {
    const newComments = [...comments];
    newComments[index].likes += 1;
    setComments(newComments);
  };
  return (
    <div className="comment-list">
      {comments.map(
        (
          comment,
          index //2. useState 변수로 목록 조회하기
        ) => (
          <Post
            key={index}
            name={comment.name}
            comment={comment.comment}
            time={comment.time}
            avatar={comment.avatar}
            likes={comment.likes}
            onDelete={() => handleDelete(index)}
            onLike={() => handleLike(index)}
          />
        )
      )}
    </div>
  );
}
