import './upload.css'
import axios from 'axios'
import { useState } from 'react'
import Recipes from '../recipes/Recipes'
import Fridge  from '../../components/Fridge'

//import fs from 'fs'

const Upload = () => {
  const [RecipesList, setRecipesList] = useState([]);

  const processImage = () => {
    // const image = fs.readFileSync("YOUR_IMAGE.jpg", {
    //   encoding: "base64"
    // })
    axios({
      method: "POST",
      url: "https://detect.roboflow.com/fridgesmart/1",
      params: {
          api_key: process.env.REACT_APP_ROBO_API_KEY,
          image: "https://i.imgur.com/6TTIhYL.jpeg"
      }
    })
    .then(function(response) {
      let ingredients = []
      response.data.predictions.map((prediction) => (ingredients.push(prediction.class)))
      console.log(ingredients)
      setRecipesList(RecipesList.concat(<Recipes ingredients={ingredients}/>))
    })
    .catch(function(error) {
        console.log(error.message);
    });
  }

  return (
    <div className="upload-comp">
      <button onClick={processImage}>upload</button>
      <div className='fridge'>
      <Fridge/>
      </div>
      {RecipesList}
    </div>
  )
}

export default Upload