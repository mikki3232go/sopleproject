<AxiosTest.jsx>
import React, { useState } from "react";
import axios from "axios";

export default function AxiosTest() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [photos, setPhotos] = useState([]);

  const getPromise = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/1")
      .then((response) => {
        setData(response.data);
        setData2(null);
        setPhotos([]);
      })
      .catch(() => console.log("get error"));
  };

  async function getAsync() {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      console.log(res.data);
      setData(null);
      setData2(res.data);
      setPhotos([]);
    } catch (e) {
      console.log(e.stack);
    }
  }
  async function getPhotos() {
    try {
      const photos = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
      );
      console.log(photos.data); // 배열요소 5000개
      setData(null);
      setData2(null);
      setPhotos(photos.data.filter((item) => item.id < 10));
    } catch (e) {
      console.log(e.stack);
    }
  }
  return (
    <main>
      <div>
        <h3>Axios 테스트해보기</h3>
        <button onClick={getPromise}>Promise로 불러오기</button>
        {/* <button onClick={putFunc}>보내기</button> */}
        <p />
        <button onClick={getAsync}>async/await로 불러오기</button>
        <p />
        <button onClick={getPhotos}>async/await로 사진 불러오기</button>
      </div>
      {data && (
        <div>
          <br />
          번호 : {data.postId} <br />
          Email : {data.email} <br />
          Body : {data.body} <br />
        </div>
      )}
      {data2 && (
        <div>
          <br />
          <div> id :{data2.id}</div>
          <div>제목 : {data2.title}</div>
        </div>
      )}

      {photos[0] &&
        photos.map((photo) => {
          return (
            <div key={photo.id}>
              <div>{photo.id}</div>
              <img
                style={{ width: "200px", height: "200px" }}
                src={photo.url}
              />
              <div>제목 : {photo.title}</div>
            </div>
          );
        })}
    </main>
  );
}


