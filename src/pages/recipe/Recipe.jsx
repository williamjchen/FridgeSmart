import './recipe.css'


const fetchRecipe = () => {
  console.log(process.env.REACT_APP_SPOON_API_KEY)
}

const Recipe = () => {
  return (
    <div>
      <button onClick={fetchRecipe}>hmm</button>
    </div>
  )
}

export default Recipe
