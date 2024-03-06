// CSS file
import "./PlantsRow.css"

function PlantsRow({name, image, description, light, water, odd}) {
    return (
        <tr className={odd ? "odd" : undefined}>
            <td>{name}</td>
            <td><img src={image} alt={name}/></td>
            <td>{description}</td>
            <td>{light}</td>
            <td>{water}</td>
      </tr>
    )
}

export default PlantsRow;


