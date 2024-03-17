import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function MapTest1() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>차고에 있는 차 목록</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}
export default MapTest1;

 