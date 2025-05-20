1.프로젝트 생성 및 필수 패키지 설치

  /*npm create vite@latest redux-toolkit-counter
  cd redux-toolkit-counter
  npm install @reduxjs/toolkit react-redux */


2. Slice생성


//step1 : src/app/store.js 파일에 counterSlice를 설정
//step 2. configureStore( ) 안에 등록
//src/app/store.js */
import { configureStore, createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
//counter의 action을 export
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//3. Redux 설정 파일 생성
//src/app/store.js 파일에, Redux 스토어를 설정합니다.(state들을 보관하는 파일)
//............
export const store = configureStore({ //3.Redux 스토어를 설정
   reducer: {
     counter: counter.reducer,
   },
 });


//4 .Redux Provider 설정(index.jsx):App와 자식 컴포넌트들은 store state 마음대로 사용 가능
import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import App from './App';
 import { store } from './app/store';
 import { Provider } from 'react-redux';
 ReactDOM.render(
   <React.StrictMode>
     <Provider store={store}>{/* 4. 프로바이더에 스토어 설정 */}  
       <App />
     </Provider>
   </React.StrictMode>,
   document.getElementById('root')
 );


//5. App.jsx에서 state가져와서 사용하기
 import { useSelector, useDispatch } from "react-redux";
 import { increment, decrement, incrementByAmount } from "./store.js";
 export default function App(
 export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
}
