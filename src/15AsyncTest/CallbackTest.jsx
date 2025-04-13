export default function CallbackTest() {
  function 실행함수(x, 콜백함수) {
    let sum = x + x;
    console.log(sum);
    콜백함수(sum);
  }
  실행함수(2, (result) => {
    실행함수(result, (result) => {
      실행함수(result, (result) => {
        console.log('종료');
      });
    });
  });
  //CallbackTest.jsx
  //4초 후에 초기값 0을 4으로 증가시키는 함수를 작성하시오.

  function increase(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  }
  increase(0, (result) => {
    console.log(result);
  });
  console.log('콜백함수 테스트');

  increase(0, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        increase(result, (result) => {
          console.log(result);
          console.log('작업완료');
        });
      });
    });
  });
  //결과 콜백지옥(?)이 무한반복되는 문제가 있음

  return <div>Callback TEst</div>;
}

// function add(x, callback) {
//     let sum = x + x;
//     console.log(sum);
//     callback(sum);
// }

// add(2, function(result) {
//     add(result, function(result) {
//         add(result, function(result) {
//             console.log('finish!!');
//         })
//     })
// })

/*
4
8
16
finish!!
*/
