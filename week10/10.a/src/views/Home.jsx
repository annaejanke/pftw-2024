import {Link} from "react-router-dom";
import plantData from "../assets/plant-list.json"

export function Home () {
    return (
        <>
        <h1>Plant List</h1>
        {plantData.map((plant) => {
            return (
                <div>
                    <img src={plant.image} alt={plant.name} width={400}/>
                    <p><Link to={`${plant.slug}`}> <strong>{plant.name}</strong></Link></p>
                </div>
            )
        })}
        </>
    )
}