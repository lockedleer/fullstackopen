import React, { useState } from 'react';
import History from './History';
import './App.css';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

function App() {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
    setAll(allClicks.concat('L'));
  }

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
    setAll(allClicks.concat('R'));
  }

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text='left' />
      <br />
      <Button onClick={handleRightClick} text='right' />
      {clicks.right}
      <br />
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
