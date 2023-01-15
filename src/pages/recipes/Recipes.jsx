import Recipe from './Recipe';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './recipes.css'
import Ingredients from '../../images/ingredients.png'

const Recipes = ({ingredients}) => {
  const [RecipesList, setRecipesList] = useState([]);

  useEffect(() => {
    fetchRecipe(ingredients)
  }, [])

  const fetchRecipe = (ingredients) => {
    let numResults = 2
  
    let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(",+")}&number=${numResults}&ranking=2&sort=min-missing-ingredients&apiKey=${process.env.REACT_APP_SPOON_API_KEY}`
    axios.get(url)
        .then(res => {
          const data = res.data
          console.log(data)
          setRecipesList(data)
          console.log("hi")
        })
  }
  
  return (
    <div className="bg">
      <div className="ingredients1">
        <table className="ingredient">
          <tr><th className="pixely">Ingredients</th></tr>
          {ingredients.map(i => (
            <tr> <td>{i}</td></tr>
          ))}
        </table>
      </div>
      <div className="ingredients2">
        <table className='recipes'>
          <tr><th className="pixely">Recipes</th></tr>
          {RecipesList.map(i => (
            <tr> <td>
              <Recipe 
                  name={i.title} 
                  have={i.usedIngredients}
                  missing={i.missedIngredients}
                  id={i.id}
              />
            </td></tr>
          ))}
      </table>
      </div>
    </div>
  )
}

export default Recipes
