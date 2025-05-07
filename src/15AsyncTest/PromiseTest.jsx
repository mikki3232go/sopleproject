//PromiseTest.jsx
export default function PromiseTest(){
    const increase = (number) => {
      const promise = new Promise((resolve, reject) => {
        //resolve는 성공, reject는 실패
        setTimeout(() => {
          const result = number + 10;
          if (result > 50) {
            //50보다 크면 rejecct
            const e = new Error("50보다 큰 수입니다.");
            return reject(e);
          }
          resolve(result); //number + 10 후에 성공 처리
        }, 1000);
      });
      return promise;
    };
    //1. 10초마다 10씩 증가한 값이 4번 출력되도록 하시오.
    console.log()
    increase(0)
      .then((number) => {
        //Promise에서 resolve된 값은 .then을 통해 받아옴
        console.log(number);
        return increase(number); //Promise를 리턴하면
      })
      .then((number) => {
        console.log(number);
        return increase(number);
      })
      .then((number) => {
        console.log(number);
        return increase(number);
      })
      .then((number) => {
        console.log(number);
        return increase(number);
      })
      .catch((e) => {
        console.log(e);
      });
    return (
      <div>
        <h1>Promise 객체 Test</h1>
      </div>
    );
  };
