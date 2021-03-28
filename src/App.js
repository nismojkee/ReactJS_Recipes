import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import style from './App.css';

const App = () => {

    const APP_ID = "f210be38";
    const APP_KEY = "040de59f21b86d790d12c378549f83da";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState(``);

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
        e.target.blur();
    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className="searchForm">
                <input type="text" className="searchBar" value={search} placeholder="Search recipe by ingredient" onChange={updateSearch}/>
                <button className="searchButton" type="submit">Search</button>
            </form>

            <div className="recipesList">
            {recipes.map(recipe => (
                <Recipe
                    key = {recipe.recipe.label}
                    title = {recipe.recipe.label}
                    images = {recipe.recipe.image}
                    ingredients = {recipe.recipe.ingredients}
                />
            ))}
            </div>
        </div>
    )
}

export default App;