import React, { useState } from 'react'
import './App.css';

const Statistic = ({ click, text, operator }) => <tr><td>{text}</td><td>{click}{operator}</td></tr>;

const Statistics = (props) => {
  const contents = props.allClicks < 1 ? <p><em>No Feedback Given</em></p>
    : <table>
        <tbody>
          <Statistic click={props.clicks.good} text ='Good' operator='' />
          <Statistic click={props.clicks.neutral} text ='Neutral' operator='' />
          <Statistic click={props.clicks.bad} text ='Bad' operator='' />
          <Statistic click={props.allClicks} text ='All' operator='' />
          <Statistic click={props.avgClicks / props.allClicks} text ='Average' operator='' />
          <Statistic click={props.clicks.good / props.allClicks * 100} text ='Positive' operator='%' />
        </tbody>
      </table>;

  return (
    <div>
      <h3>Statistics</h3>
      {contents}
    </div>
  )
}

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });
  const [allClicks, setAllClicks] = useState(0);
  const [avgClicks, setAvgClicks] = useState(0);

  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 })
    setAllClicks(allClicks + 1);
    setAvgClicks(avgClicks + 1);
  }

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
    setAllClicks(allClicks + 1);
  }

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
    setAllClicks(allClicks + 1);
    setAvgClicks(avgClicks - 1);
  }


  return (
    <div className="container">
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick}text='Bad' />
      <br />
      <br />
      <Statistics clicks={clicks} allClicks={allClicks} avgClicks={avgClicks} />
    </div>
  )
}

export default App;
