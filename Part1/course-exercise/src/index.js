import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.js';
import Content from './Components/Content.js';
import Total from './Components/Total.js';
import './index.css';

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
