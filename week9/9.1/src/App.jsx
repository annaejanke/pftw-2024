// CSS Imports
import { useState } from "react"
import "./App.css"

function App() {
  const [textInputs, setTextInputs] = useState({
    firstName: "",
    lastName: "",
    streetAdress: "",
    state: "",
    country: "",
  })

  return (
    <>
    <h1>Alpaca Fan Club Registration Form</h1>
    <form action="#">

      <fieldset>
        <legend>Personal Information</legend>

        <div>
          <label for="name">First Name: </label>
          <input type="text" name="pinfo" id="firstName" />
        </div>

        <div>
          <label for="pwd">Last Name: </label>
          <input type="text" name="pinfo" id="lastName" />
        </div>

        <div>
          <label for="pwd">Street Address: </label>
          <input type="text" name="pinfo" id="streetAddress" />
        </div>

        <div>
          <label for="pwd">State: </label>
          <input type="text" name="pinfo" id="state" />
        </div>

        <div>
          <label for="pwd">Country: </label>
          <input type="text" name="pinfo" id="country" />
        </div>

      </fieldset>

      <fieldset>
        <legend>Alpaca Information</legend>
        <p>Favorite Alpaca Colors:</p>

            <input type="radio" id="purple" name="fav_color"/>
            <label for="html">Purple</label>

            <input type="radio" id="pink" name="fav_color"/>
            <label for="css">Pink</label>

            <input type="radio" id="orange" name="fav_color"/>
            <label for="javascript">Orange</label>

            <input type="radio" id="yellow" name="fav_color"/>
            <label for="javascript">Yellow</label>

      </fieldset>

      <input type="submit" name="subbutton" id="submit" value="Submit"></input>
      <input type="reset" name="subbutton" id="reset" value="Reset"></input>
    
    </form>
    </>
  )
}

export default App
