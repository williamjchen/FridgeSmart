import './upload.css'
import axios from 'axios'
import { useState } from 'react'
import Recipes from '../recipes/Recipes'
import Fridge  from '../../components/Fridge'

//import fs from 'fs'

const Upload = () => {
  const [RecipesList, setRecipesList] = useState([])
  const [SelectedFile, setSelectedFile] = useState();
  const [Base64IMG, setBase64IMG] = useState();


  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const convertToBase64 = () => {
    const reader = new FileReader()

    reader.readAsDataURL(SelectedFile)

    reader.onload = () => {
      console.log('called: ', reader)
      setBase64IMG(reader.result)
    }
  }

  const processImage = () => {
    convertToBase64()
    axios({
      method: "POST",
      url: "https://detect.roboflow.com/fridgesmart/1",
      params: {
          api_key: process.env.REACT_APP_ROBO_API_KEY
      },
      data: Base64IMG,
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(function(response) {
      let ingredients = []
      response.data.predictions.map((prediction) => (ingredients.push(prediction.class)))
      ingredients = [...new Set(ingredients)]
      setRecipesList(RecipesList.concat(<Recipes ingredients={ingredients}/>))
    })
    .catch(function(error) {
        console.log(error.message);
    });
  }

  return (
    <div className="upload-comp">
      <input type="file" onChange={handleFileChange} />
      <button onClick={processImage}>upload</button>
      <div className='fridge'>
      <Fridge/>
      </div>
      {RecipesList}
    </div>
  )
}

export default Upload