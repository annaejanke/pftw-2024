import Camelid from "./components/camelid.jsx"

function App() {
  const llama = {src: "./llama.jpg", trivia: "The current population of llamas and alpacas in South America is estimated to be more than 7 million."}
  const alpaca = {src: "./alpaca.jpg", trivia: "Alpacas come in 22 colours, from a deep blue-black through browns and tans to white"}

  return (
    <div>
      <h2>Camelid</h2>
      <Camelid
        src={llama.src}
        trivia={llama.trivia}
      />
      <Camelid
        src={alpaca.src}
        trivia={alpaca.trivia}
      />

    </div>
  )
}


export default App;