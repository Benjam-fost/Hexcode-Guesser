import { useEffect, useState } from 'react'
import './app.css'
import Rectangle  from './components/rectangle'
import Button from './components/button'

function App() {
  const [correct, setCorrect] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const hexCodes = ["#000000", "#ff0000ff", "#15ff00ff", "#006effff", "#ff00d4ff", "#00ffffff"];

  function randomColour(){
    const index = Math.floor(Math.random() * hexCodes.length);
    return hexCodes[index];
  }

  return (
    <main>
      <h1 className={"dark" ? darkMode : ""}>
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
