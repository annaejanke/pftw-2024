import { Link, useParams } from "react-router-dom";

import PropTypes from "prop-types";

export function Plant({data}) {
    const {slug} = useParams();
    const plant = data.find((plant) => plant.slug === slug)

    return(
        <>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        <h1>{plant.name}</h1>
        <img src={plant.image} alt={plant.name} width={400} />
        <p><strong>Description:</strong> {plant.description}</p>
        <p><strong>Light:</strong> {plant.light}</p>
        <p><strong>Water:</strong> {plant.water}</p>
        </>
    )
}

Plant.proptypes = {
    data: PropTypes.arrayOf(PropTypes.any)
}