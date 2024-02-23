import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const welcomeText = "🦚🦆Hi, Hello!🦖🐙"
  const question = "What is your favoite emoji?"

  return (
    <>
      <div>
        <h1>{welcomeText}</h1>
      </div>
      <h1>This is me coding in React.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          how high can you count to: {count}
        </button>
      </div>
      <p className="question">
        {question}
      </p>
    </>
  )
}

export default App
