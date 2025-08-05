import { useEffect, useState } from 'react'
import './app.css'
import Rectangle  from './components/rectangle'
import Button from './components/button'

function App() {
  const [correct, setCorrect] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const hexCodes = ["#000000", "#ff0000ff", "#15ff00ff", "#006effff", "#ff00d4ff", "#00ffffff"];
  const [answer, setAnswer] = useState("");

  function randomIndex(){
    return Math.floor(Math.random() * hexCodes.length)
  }

  useEffect(() => {
    setAnswer(hexCodes[randomIndex()])
  }, [correct])

  return (
    <main className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)} className={darkMode ? "dark" : ""} id="modeButton">☀</button>
      <h1 className={darkMode ? "dark" : ""}>
        Hexcode Guesser
      </h1>
      <div>
        <Rectangle colour={answer} />
      </div>
      <div>
        <Button hexCodes={hexCodes} correctIndex={answer}/>
        <Button />
        <Button />
      </div>
    </main>
  )
}

export default App
