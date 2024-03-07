import { useState } from 'react'
import './App.css'
import AnimalsComponent from './AnimalsComponent';

function App() {
  const [headline, setHeadline] = useState("Anna's List of Animals");
  const [animals, setAnimals] = useState([
    "Jellyfish",
    "Octopus",
    "Rabbit",
    "Deer",
    "Bear",
    "Bald Eagle",
    "Frog",
    "Giraffe",
    "Lizard",
    "Shark",
    "Whale",
    "Crocodile",
    "Loon",
    "Dog",
    "Cat"]);
    function deleteAnimal(animalName) {
      const updatedArray = animals.filter((animal) => {
        return animal !== animalName;
      });
      setAnimals(updatedArray);
    }
    function focusAnimal(animalName) {
      setHeadline(animalName)
    }

  return (
    <>
      <h1>{headline}</h1>
      {animals.map((animal) => {
         return <AnimalsComponent
          key={animal} 
          animalName={animal} 
          deleteFn={deleteAnimal}
          focusFn={focusAnimal}
          />
      })}

    </>
  )
}

export default App
