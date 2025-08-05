import { useEffect, useState } from 'react'
import './app.css'
import Rectangle  from './components/rectangle'
import Button from './components/button'

function App() {
  const [roundEnded, setRoundEnded] = useState(false);
  const [input, setInput] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const hexCodes = ["#000000", "#ff0000ff", "#15ff00ff", "#006effff", "#ff00d4ff", "#00ffffff"];
  const [answerIndex, setAnswerIndex] = useState("");
  const [choices, setChoices] = useState([]);

  function randomIndex(){
    return Math.floor(Math.random() * hexCodes.length)
  }

  function getChoices(){
    // Remove the correct answer
    let incorrectCodes = hexCodes.map((_, index) => index)
      .filter(index => index !== answerIndex)

    // Shuffles incorrect codes
    for(let i = incorrectCodes.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * incorrectCodes.length);
      [incorrectCodes[i], incorrectCodes[j]] = [incorrectCodes[j], incorrectCodes[i]];
    }
    // Takes two shuffled codes
    incorrectCodes = incorrectCodes.slice(0,2).map(i => hexCodes[i])
    // Shuffles them into the resulting choices array
    return [hexCodes[answerIndex], ...incorrectCodes]
      .sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    setAnswerIndex(randomIndex());
    setChoices(getChoices());
  }, [])

  return (
    <main className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)} className={darkMode ? "dark" : ""} id="modeButton">☀</button>
      <h1 className={darkMode ? "dark" : ""}>
        Hexcode Guesser
      </h1>
      <div>
        <Rectangle colour={hexCodes[answerIndex]} />
      </div>
      <div>
        {choices.map((choice) => 
          <Button key={choice} hexcode={choice} onClick={() => setInput(choice)} />
        )}
      </div>
    </main>
  )
}

export default App
