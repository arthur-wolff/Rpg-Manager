import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiceRoller from './components/diceRoller.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <DiceRoller />
      </div>
    </>
  )
}

export default App
