import './recipe.css'
import axios from 'axios';

const fetchRecipe = () => {
  let ingredients = ["apples", "flour", "sugar", "baking powder", "spices", "milk", "egg"]
  let numResults = 2

  let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(",+")}&number=${numResults}&sort=min-missing-ingredients&apiKey=${process.env.REACT_APP_SPOON_API_KEY}`
  axios.get(url)
      .then(res => {
        const data = res.data
        console.log(data)
      })
}

const Recipe = () => {
  return (
    <div>
      <button onClick={fetchRecipe}>hmm</button>
    </div>
  )
}

export default Recipe
