//1.프로젝트 생성 및 필수 패키지 설치

  /*npm create vite@latest redux-toolkit-counter
  cd redux-toolkit-counter
  npm install @reduxjs/toolkit react-redux */

https://replit.com/@teacher013/redux-toolkit#src/index.jsx
//store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
//slice는 state를 저장하는 역할을 한다.
export const counter = createSlice({
  name: "counter",
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
//export
export const { increment, decrement, incrementByAmount } = counter.actions;

export const store = configureStore({
  reducer: {
    counter: counter.reducer,
    //변수:counter, 변경함수들:reducer
  },
});

//App.jsx
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from "./store";
export default function App() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <main>
      <h1>Redux Toolkit Counter</h1>
      <div>
        <button onClick = {()=>dispatch(decrement())}>-</button>
        <span>{count}</span>        
        <button onClick = {()=>dispatch(increment())}>+</button>
      </div>
      <button onClick = {()=>dispatch(incrementByAmount(5))}>5씩 증가</button>
    </main>
  )
}

//index.jsx
//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {store} from './store';
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store = {store}>
				<App />
		</Provider>
	</React.StrictMode>
)
