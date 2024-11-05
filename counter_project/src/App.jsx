import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 5
  
  const addvalue = () => {
    counter += 1;
    setCounter(counter)
    
  }

  const decvalue = () => {
    counter -= 1;
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: { counter }</h2>

      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={decvalue}>Remove Value</button>
    </>
  )
}

export default App
