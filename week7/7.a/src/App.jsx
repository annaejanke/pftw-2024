// CSS Imports
import "./App.css"

// Component Imports
import PlantsRow from "./PlantsRow"

function App () {
  const plants = [
    {
      name: "Ficus Elastica",
      image: "./Ficus_Elastica.png",
      description: "The Rubber Plant is a popular ornamental plant from the Ficus genus, native to North Eastern India and surrounding regions",
      light: "medium to bright indirect light",
      water: "Water moderately spring through fall, allowing the top inch or two of soil to dry completely before re-watering. Water more sparingly during winter"
    },
    {
      name: "Zamicula Zamifola",
      image: "./Zamicula_Zamifola.png",
      description: "The ZZ is a tropical plant in the aroid family, Araceae. It is native to Zanzibar, Kenya, and Eastern Africa",
      light: "Medium to bright indirect light",
      water: "Water every 2-3 weeks, allowing soil to dry out between waterings. Increase frequency with increased light and seasonality"
    },
    {
      name: "Sansevieria Zeylanica",
      image: "./Sansevieria_Zeylanica.png",
      description: "Native to arid regions of India, Sansevieria Zeylanica is a species characterized by its dark green variegation. Snake plants are tropical plants that are also succulents",
      light: "medium to bright indirect light",
      water: "Water every 2-3 weeks, allowing soil to dry out between waterings. Increase frequency with increased light and seasonality"
    },
    {
      name: "Calathea Lancifolia (Rattlesnake)",
      image: "./Calathea_Lancifolia.png",
      description: "Native to Brazil they are also known as the Rattlesnake plant and are a colorful member of the prayer plant family, Marantaceae",
      light: "medium to bright indirect light",
      water: "Water moderately spring through fall, allowing the top inch or two of soil to dry completely before re-watering. Mist often"
    },
    {
      name: "Asplenium Nidus (Bird's Nest Fern)",
      image: "./Asplenium_Nidus.png",
      description: "Most commonly referred to as the Birds Nest Fern. In the wild, this fern grows everywhere: on trees and on the ground",
      light: "medium to bright indirect light",
      water: "Water weekly, allowing soil to dry out half way down between waterings. Increase frequency with increased light"
    },
    {
      name: "Opuntia Variegata",
      image: "./Opuntia_Variegata.png",
      description: "Commonly known as Joseph's Coat is one of the very few naturally occurring white-variegated cacti",
      light: "Full sun. Try to provide at least 5-6 hours of direct sunlight per day",
      water: "Keep soil relatively dry. Water spring through fall, allowing soil to dry completely before re-watering. Water sparingly during winter"
    },
  ]
  return (
    <>
      <h1>My Plant Wishlist</h1>
      <p>Below is a list of plants that are on my wishlist!</p>
      <table className="plants-table">
        <thead>
          <tr>
            <th>Plant</th>
            <th>Photo</th>
            <th>Description</th>
            <th>Light</th>
            <th>Water</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, index) => {
            return (<PlantsRow 
                key={index}
                odd={index % 2 === 0}
                name={plant.name} 
                image={plant.image} 
                description={plant.description} 
                light={plant.light} 
                water={plant.water}
            />)
          })}
        </tbody>
      </table>
    </>
  )
}

export default App;