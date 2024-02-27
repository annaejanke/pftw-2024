import './App.css'

function App() {

  const showLast = false;

const llamaFacts = [
    "Llamas don't bite. They spit when they're agitated, but that's mostly at each other. Llamas also kick and neck wrestle each other when agitated.",
    "Llamas are smart and easy to train.",
    "Llamas come in a range of solid and spotted colors including black, gray, beige, brown, red, and white.",
    "Llamas are social animals and prefer to live with other llamas or herd animals.",
    "A group of llamas is called a herd.",
    "The current population of llamas and alpacas in South America is estimated to be more than 7 million.",
    ];

  return (
    <div>
      <h1>Llama Facts</h1>
      <ul>
        <li>{llamaFacts[0]}</li>
        <li>{llamaFacts[1]}</li>
        <li>{llamaFacts[2]}</li>
        <li>{showLast ? llamaFacts[4] : llamaFacts[3]}</li>


      </ul>

    </div>
  )
}

export default App
