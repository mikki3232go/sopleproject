//CallbackTest0.jsx
//10초 후에 초기값 0을 10으로 증가시키는 함수를 작성하시오.
export default function CallbackTest() {
    const increase = (number, callback) => {
      setTimeout(() => {
        const result = number + 10;
        if (callback) {
          callback(result);
        }
      }, 1000);
    };
  
    console.log("콜백함수 테스트")
    increase(0, (result) => {
        document.write(result + " <br> ");
        increase(result, (result) => {
          document.write(result + " <br> ");
          increase(result, (result) => {
            document.write(result + " <br> ");
            increase(result, (result) => {
              document.write(result + " <br> ");
              document.write("작업완료");
            });
  
        });
  
      });
  
    });
  
  //결과 콜백지옥(?)이 무한반복되는 문제가 있음
      return (
       <div>
          <h1>Callback함수 Test</h1>
        </div>
  
    );
  
  };
