import { useEffect, useState } from 'react'
import './app.css'
import Rectangle  from './components/rectangle'
import Button from './components/button'

function App() {
  const [roundEnded, setRoundEnded] = useState(false);
  const [numCorrect, setNumCorrect] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const hexCodes = ["#000000", "#ff0000ff", "#15ff00ff", "#006effff", "#ff00d4ff", "#00ffffff"];
  const [answerIndex, setAnswerIndex] = useState("");
  const [choices, setChoices] = useState([]);

  function randomIndex(){
    return Math.floor(Math.random() * hexCodes.length)
  }

  // Handles the game state for when a choice is selected
  function handleSelect(choice){
    if (choice === hexCodes[answerIndex]){
      setNumCorrect(numCorrect + 1);
    }
    setRoundEnded(true)
  }

  useEffect(() => {
    setRoundEnded(false);
    const index = randomIndex();
    const incorrectIndicies = hexCodes
    .map((_, i) => i)
    .filter(i => i !== index)
    .sort(() => Math.random() -0.5)
    .slice(0,2);
    
    const codes = [hexCodes[index], ...incorrectIndicies.map(i => hexCodes[i])]
      .sort(() => Math.random() -0.5);
    
    setAnswerIndex(index);
    setChoices(codes);
  }, [roundEnded])

  return (
    <main className={darkMode ? "dark" : ""}>
      <div id="counter-div">
        <h3>{numCorrect}</h3>
      </div>
      <button onClick={() => setDarkMode(!darkMode)} className={darkMode ? "dark" : ""} id="modeButton">☀</button>
      <h1 className={darkMode ? "dark" : ""}>
        Hexcode Guesser
      </h1>
      <div>
        <Rectangle colour={hexCodes[answerIndex]} />
      </div>
      <div id="choice-div">
        {choices.map((choice) => 
          <Button key={choice} darkMode={darkMode} hexcode={choice} onClick={() => handleSelect(choice)} />
        )}
      </div>
    </main>
  )
}

export default App
