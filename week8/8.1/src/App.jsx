import "./App.css"
import {useState} from "react";

function App () {
  const [image, setImage] = useState("#");
  

  return (
    <>
      <h1>Click on the button to view the image</h1>
      <div>
        <img src={image}></img>
      </div>
      <button onClick={() => {
        setImage("./alpaca.jpg")
      }}>Alpaca</button>
      <button onClick={() => {
        setImage("./llama.jpg")
      }}>Llama</button>
    </>
  )
}

export default App
