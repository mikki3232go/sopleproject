import React, { useState } from 'react';
import './postList.css';

const initialComments = [
  {
    name: '오주현',
    comment: '안녕하세요. 오주현입니다.',
    time: '2시간 전',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png', // 기본 아바타 이미지 URL
    likes: 0,
  },
  {
    name: '',
    comment: '리액트로 프로젝트 만들고 있습니다.',
    time: '3시간 전',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png', // 기본 아바타 이미지 URL
    likes: 0,
  },
  {
    name: '백도준',
    comment: '리액트 재미있어요.',
    time: '5시간 전',
    avatar: ' https://www.w3schools.com/w3images/avatar6.png', // 기본 아바타 이미지 URL
    likes: 0,
  },
  {
    name: '공덕현',
    comment: '리액트 벌써 3주차라니........',
    time: '5시간 전',
    avatar: ' https://www.w3schools.com/w3images/avatar5.png', // 기본 아바타 이미지 URL
    likes: 0,
  },
];

const Comment = ({ name, comment, time, avatar, likes, onDelete, onLike }) => (
  <div className="comment">
    <img className="avatar" src={avatar} alt="user-avatar" />
    <div className="comment-details">
      <div className="user-name">{name}</div>
      <div className="comment-text">{comment}</div>
      <div className="comment-time">
        {time}
        {'   '}
        <span className="like-button" onClick={onLike}>
          ❤️
        </span>
        <span className="like-count">{likes}</span>
      </div>
    </div>
    <div>
      <button className="delete-button" onClick={onDelete}>
        삭제
      </button>
    </div>
  </div>
);

const PostList3 = () => {
  const [comments, setComments] = useState(initialComments);

  // 댓글 삭제 함수
  const handleDelete = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  // 좋아요 증가 함수
  const handleLike = (index) => {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      newComments[index].likes += 1;
      return newComments;
    });
  };

  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          comment={comment.comment}
          time={comment.time}
          avatar={comment.avatar}
          likes={comment.likes}
          onDelete={() => handleDelete(index)} // 삭제 함수 전달
          onLike={() => handleLike(index)} // 좋아요 함수 전달
        />
      ))}
    </div>
  );
};

export default PostList3;
