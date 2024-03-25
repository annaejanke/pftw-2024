// CSS Imports
import { useState } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    state: "",
    country: "",
    colors: [],
  })

  function handleTextChange(evt) {
    setData((previousData) =>{
      if(evt.target)
      return {
        ...previousData,
        [evt.target.name]: evt.target.value
      }
    })
  }

  function handleColorChange(evt) {
    let newColors;

    if (data.colors.includes(evt.target.id)) {
      newColors = data.colors.filter((color) => color !== evt.target.id)
    } else {
      newColors = [...data.colors, evt.target.id]
    }

    setData((previousData) => {
      return {
        ...previousData,
        colors: newColors,
      }
    })

  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(data);
  }


  return (
    <>
    <h1>Alpaca Fan Club Registration Form</h1>
    <form onSubmit={handleSubmit}>

      <fieldset>
        <legend>Personal Information</legend>

        <div>
          <label htmlFor="firstName">First Name: </label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName" 
            value={data.firstName} 
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input 
            type="text" 
            name="lastName" 
            id="lastName" 
            value={data.lastName} 
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label htmlFor="streetAddress">Street Address: </label>
          <input 
            type="text" 
            name="streetAddress" 
            id="streetAddress" 
            value={data.streetAddress} 
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label htmlFor="state">State: </label>
          <input 
            type="text" 
            name="state" 
            id="state" 
            value={data.state}
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label htmlFor="country">Country: </label>
          <input 
            type="text" 
            name="country" 
            id="country" 
            value={data.country}
            onChange={handleTextChange} 
          />
        </div>

      </fieldset>

      <fieldset>
        <legend>Alpaca Information</legend>
        <p>Favorite Alpaca Colors:</p>

            <input 
              type="checkbox" 
              id="purple" 
              name="favColor"
              checked={data.colors.includes("purple")}
              onChange={handleColorChange}
            />
            <label htmlFor="html">Purple</label>

            <input 
              type="checkbox" 
              id="pink" 
              name="favColor"
              checked={data.colors.includes("pink")}
              onChange={handleColorChange}
            />
            <label htmlFor="css">Pink</label>

            <input 
              type="checkbox" 
              id="orange" 
              name="favColor"
              checked={data.colors.includes("orange")}
              onChange={handleColorChange}
            />
            <label htmlFor="javascript">Orange</label>

            <input 
              type="checkbox" 
              id="yellow" 
              name="favColor"
              checked={data.colors.includes("yellow")}
              onChange={handleColorChange}
            />
            <label htmlFor="javascript">Yellow</label>

      </fieldset>

      <button type="submit" name="subbutton" id="submit" value="Submit">Submit</button>
    
    </form>

    <div>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Street Address: {data.streetAddress}</p>
      <p>State: {data.state}</p>
      <p>Country: {data.country}</p>
      <p>Colors:</p>
      {data.colors.map((color) => (
        <p key={color}>{color}</p>
      ))}
    </div>
    </>
  )
}

export default App
