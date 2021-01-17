import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Display = ({ counter }) => <div><h1>{counter}</h1></div>;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const App = (props) => {
  const [ counter, setCounter ] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const zero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />

      <br />
      <br />
      <Button handleClick={increase} text="INCREASE" />

      <br />
      <br />
      <Button handleClick={zero} text="ZERO" />

      <br />
      <br />
      <Button handleClick={decrease} text="DECREASE" />
    </div>
  )
}

let counter = 1;

const refresh = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App counter={counter} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

refresh();
counter += 1;
refresh();
counter += 1;
refresh();

//setInterval(() => {
//  refresh();
//  counter += 1;
//}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
