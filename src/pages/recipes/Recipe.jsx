import axios from 'axios';
import { useState, useEffect } from 'react';
import './recipes.css'

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
        <p className="name">{name}</p>
        <p className="link">{RecipeLink}</p>
        <p className="have">Have:</p>
        {have.map(item => (<p className="item">{item.name}</p>))}    
        <p className="missing">Missing:</p>
        {missing.map(item => (<p className="item">{item.name}</p>))}        
    </div>
    )
}

export default Recipe