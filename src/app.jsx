import { useEffect, useState } from 'react'
import './app.css'
import Rectangle  from './components/rectangle'
import Button from './components/button'

function App() {
  const [ongoingRound, setOngoingRound] = useState(true);
  const [correct, setCorrect] = useState(null);
  const hexCodes = ["#000000", "#A10101", "#1bfd07ff", "#006effff", "#ff00d4ff"];

  function randomColour(){
    const index = Math.floor(Math.random() * hexCodes.length);
    const result = hexCodes[index];
    console.log(`Index: ${index}`);
    return result;
  }

  return (
    <main>
      <h1>
        Hexcode Guesser
      </h1>
      <div>
        <Rectangle colour={randomColour()} />
      </div>
      <div>
        <Button />
        <Button />
        <Button />
      </div>
    </main>
  )
}

export default App
