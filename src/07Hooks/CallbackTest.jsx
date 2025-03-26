import React, { useState, useEffect } from 'react';

export default function CallbackTest() {
  const [results, setResults] = useState([]);

  const increase = (number, callback) => {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  };

  useEffect(() => {
    console.log("콜백함수 테스트");
    increase(0, (result1) => {
      setResults((prev) => [...prev, result1]);
      increase(result1, (result2) => {
        setResults((prev) => [...prev, result2]);
        increase(result2, (result3) => {
          setResults((prev) => [...prev, result3]);
          increase(result3, (result4) => {
            setResults((prev) => [...prev, result4]);
            console.log("작업 완료");
          });
        });
      });
    });
  }, []);

  return (
    <div>
      <h1>Callback 함수 Test</h1>
      {results.map((result, index) => (
        <p key={index}>{result}</p>
      ))}
      {results.length === 4 && <p>작업 완료</p>}
    </div>
  );
}
