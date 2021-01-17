import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const MostVotes = ({ max, place, anecdotes }) => {
  return (
    <div>
      <p>{anecdotes[place]}</p>
      <p>Has {max} votes</p>
    </div>
  )
}

const App = ({ anecdotes }) => {
  const [rand, setRand] = useState(0);
  const [selected, setSelected] = useState(anecdotes[rand]);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  console.log(points);

  const handleNext = () => {
    const num = Math.floor(Math.random() * anecdotes.length)
    setRand(num);
    setSelected(anecdotes[num]);
  }

  const handleVote = () => {
    setPoints({ ...points, [rand]: points[rand] += 1 });
  }

  let arr = Object.values(points);
  let max = Math.max(...arr);
  let place = arr.indexOf(max);

  return (
    <div>
      <p>{selected}</p>
      <p>Has {points[rand]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next Anecdote</button>
      <MostVotes max={max} place={place} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);