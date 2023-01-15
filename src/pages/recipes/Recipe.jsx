import axios from 'axios';
import { useState, useEffect } from 'react';

const Recipe = ({name, have, missing, id}) => {
    const [RecipeLink, setRecipeLink] = useState("");

    useEffect(() => {
        fetchRecipe()
    }, [])

    const fetchRecipe = () => {
        let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`
        axios.get(url)
            .then(res => {
                const data = res.data
                setRecipeLink(data.sourceUrl)
            })
    }

    return (
    <div>
        <h1>{name}</h1>
        <p>{RecipeLink}</p>
        <h2>have</h2>
        {have.map(item => (<h3>{item.name}</h3>))}    
        <h2>missing</h2>
        {missing.map(item => (<h3>{item.name}</h3>))}        
    </div>
    )
}

export default Recipe