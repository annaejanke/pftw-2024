import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Plant } from "./views/Plant";
import './App.css'
import plantData from "./assets/plant-list.json";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<Plant data={plantData}/>} />
      </Routes>
    </>
  )
}

export default App
