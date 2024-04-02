import { useState } from "react"

import PropTypes from 'prop-types';


// CSS file
import "./PlantForm.css"

const defaultPlantData = {
  name: "",
  image: "",
  description: "",
  light: "",
  water: "",
};

const defaultErrorData = {
  name: "",
  image: "",
  description: "",
  light: "",
  water: "",
};

function PlantForm({addPlant}) {

    const [data, setData] = useState(defaultPlantData);
    const [errors, setErrors] = useState(defaultErrorData);
  
    function handleTextChange(evt) {
      setData((previousData) =>{
        if(evt.target)
        return {
          ...previousData,
          [evt.target.name]: evt.target.value
        }
      })
    }

    function handleSubmit(evt) {
      evt.preventDefault();

      if (validateForm()) {
        addPlant(data);
        resetForm();
      }
    }

    function resetForm() {
      setData(defaultPlantData)
      setErrors(defaultErrorData)
    }

    function validateForm() {

      let valid = true;

      // Name Validation
      if (!data.name) {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            name: "name is required",
          }
        })

        valid = false;

      } else {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            name: "",
          }
        })
      }

      // Image Validation
      if (!data.image) {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            image: "image is required",
          }
        })

        valid = false;
      } else {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            image: "",
          }
        })
      }

      // Description Validation
      if (!data.description) {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            description: "description is required",
          }
        })

        valid = false;
      } else {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            description: "",
          }
        })
      }

      // Light Validation
      if (!data.light) {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            light: "light is required",
          }
        })

        valid = false;
      } else {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            light: "",
          }
        })
      }

      // Water Validation
      if (!data.water) {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            water: "water is required",
          }
        })

        valid = false;
      } else {
        setErrors((previousErrors) => {
          return {
            ...previousErrors,
            water: "",
          }
        })
      }

      return valid;
    }
  
    return (
      <>
      <form onSubmit={handleSubmit}>
  
        <fieldset>  
          <div>
            <label htmlFor="name">Plant Name: </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={data.name}
              onChange={handleTextChange}
              onBlur={validateForm}
            />
            {(errors.name !== "") && (<p className="error">{errors.name}</p>)}
          </div>
  
          <div>
            <label htmlFor="image">Image URL: </label>
            <input 
              type="text" 
              name="image" 
              id="image" 
              value={data.image} 
              onChange={handleTextChange}
              onBlur={validateForm}
            />
            {(errors.image !== "") && (<p className="error">{errors.image}</p>)}
          </div>
  
          <div>
            <label htmlFor="description">Description: </label>
            <input 
              type="text" 
              name="description" 
              id="description" 
              value={data.description} 
              onChange={handleTextChange}
              onBlur={validateForm}
            />
            {(errors.desciption !== "") && (<p className="error">{errors.description}</p>)}
          </div>
  
          <div>
            <label htmlFor="light">Light: </label>
            <input 
              type="text" 
              name="light" 
              id="light" 
              value={data.light}
              onChange={handleTextChange}
              onBlur={validateForm}
            />
            {(errors.light !== "") && (<p className="error">{errors.light}</p>)}
          </div>
  
          <div>
            <label htmlFor="water">Water: </label>
            <input 
              type="text" 
              name="water" 
              id="water" 
              value={data.water}
              onChange={handleTextChange} 
              onBlur={validateForm}
            />
            {(errors.water !== "") && (<p className="error">{errors.water}</p>)}
          </div>
  
        </fieldset>

        <button type="submit" name="subbutton" id="submit" value="Submit" disabled={errors.name || errors.description || errors.light || errors.water || errors.image}>Add Plant</button>
      
      </form>
      </>
    )
  }

  PlantForm.propTypes = {
    addPlant: PropTypes.func
}
  
  export default PlantForm