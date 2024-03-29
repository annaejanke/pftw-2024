import PropTypes from 'prop-types';

// CSS file
import "./PlantsRow.css"

function PlantsRow({name, image, description, light, water, odd, onDelete, onDuplicate}) {
    return (
        <tr className={odd ? "odd" : undefined}>
            <td>{name} 
                <button onClick={() => {onDuplicate()}}
                style={{marginBottom: "10px"}}>Duplicate</button> 
                <button onClick={() => {onDelete()}}>Delete</button>
            </td>
            <td><img src={image} alt={name}/></td>
            <td>{description}</td>
            <td>{light}</td>
            <td>{water}</td>
      </tr>
    )
}

PlantsRow.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    light: PropTypes.string,
    water: PropTypes.string,
    odd: PropTypes.bool,
    onDelete: PropTypes.func,
    onDuplicate: PropTypes.func,
}

export default PlantsRow;


