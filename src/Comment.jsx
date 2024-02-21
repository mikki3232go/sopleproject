import React from "react";
// 컴포넌트 파일에 스타일드 컴포넌트로 css작성
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row ",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentontainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mameText: {
    color: "lightblue",
    fontWeight: "bold",
    fontSize: 16,
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};
function Comment(props) {
  return (
    <main style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          style={styles.image}
        />
      </div>

      <div style={styles.contentontainer}>
        <span style={styles.nameText}> {props.name}</span>
        <span style={styles.commentText}>{props.comment} </span>
      </div>
    </main>
  );
}
export default Comment;
