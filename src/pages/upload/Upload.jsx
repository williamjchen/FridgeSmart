import './upload.css'
import axios from 'axios'
import { useState } from 'react';
import Recipes from '../recipes/Recipes';

//import fs from 'fs'

const Upload = () => {
  const [Recipes, setRecipes] = useState([]);

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
      setRecipes(Recipes.concat(<Recipes ingredients={ingredients}/>))
      console.log(ingredients)
    })
    .catch(function(error) {
        console.log(error.message);
    });
  }

  return (
    <div>
      <button onClick={processImage}>upload</button>
      {Recipes}
    </div>
  )
}

export default Upload