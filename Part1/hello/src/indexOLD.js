import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>Hello, {name}, you are {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  const [ counter, setCounter ] = useState(0);
  const name = 'Peter';
  const age = 10;

  const increase = () => setCounter(counter + 1);
  const zero = () => setCounter(0);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />

      <br />
      <br />
      <p>counter: {counter}</p>

      <br />
      <br />
      <button onClick={increase}>click it</button>

      <br />
      <br />
      <button onClick={zero}>zero</button>
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
