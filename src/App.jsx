import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)

  
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  

  return (
    <>
       <h1>Counter</h1>
       <h2>Add value or Remove value</h2>

       
       <h1>The Counter Value: {counter}</h1>

       <button onClick={addValue}>Add value : {counter}</button>
       <br/>
       <br/>
       <button onClick={removeValue}>Remove value : {counter}</button>
    </>
  )
}

export default App
