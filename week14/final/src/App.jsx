import './App.css'
import portfolio from "./assets/portfolio.json";


// Libaries
import { Routes, Route } from "react-router-dom";

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Contact } from './views/Contact';
import { Home } from './views/Home';
import { About } from './views/About';
import { Project } from './views/Project';



function App() {
  return (
    <>
    <Navbar />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <Routes>
          <Route path="/" element={<Home data={portfolio}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path=":slug" element={<Project data={portfolio}/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
