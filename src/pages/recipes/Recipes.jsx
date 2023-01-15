import Recipe from './Recipe';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Recipes = ({ingredients}) => {
  const [RecipesList, setRecipesList] = useState([]);

  useEffect(() => {
    fetchRecipe(ingredients)
  })

  const fetchRecipe = (ingredients) => {
    let numResults = 2
  
    let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(",+")}&number=${numResults}&sort=min-missing-ingredients&apiKey=${process.env.REACT_APP_SPOON_API_KEY}`
    axios.get(url)
        .then(res => {
          const data = res.data
          console.log(data)
          setRecipesList(data)
        })
  }  
  
  return (
    <div>
      {RecipesList.map(i => (
        <Recipe 
            name={i.title} 
            have={i.usedIngredients}
            missing={i.unusedIngredients}
        />
    ))}
    </div>
  )
}

export default Recipes
