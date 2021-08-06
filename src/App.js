import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'ea706456';
  const APP_KEY = 'e47e299bb4ae7652e5f3fadac2d657dc';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  // THE DATA WILL ONLY BE FETCHED WHEN THE USER HITS THE SUBMITBUTTON WHICH IS STORED IN THE QUERY
  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    // THE USER SERACH INPUT IS BEEN INPUT TO THE API QUERY
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    // const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  // const getRecipes = async () => {
  //   const response = await fetch('https://api.edamam.com/api/recipes/v2');
  //   const data = await response.json();
  //   console.log(data);
  // }

  // THE USER INPUT WERE BEEN STORED IN THE SEARCH STATE
  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  }

  // SEARCH RESULTS WILL ONLY APPEAR WHEN THEY USER HITS THE SUBMIT BUTTON TO AVOID THE USEEFFECT RE-RENDERING
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // TO RETURN THE INPUT BACK TO EMPTY AFTER THE USER CLICK THE SUBMIT BUTTON AND GOTTEN THE SEARCH RESULTS
    setSearch('');
  }

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={getSearch} className="search-form">
            <div className="logo">
              <a href="/"><h2>theTechBoi.<span style={{color:"red"}}><i>nugagee</i></span></h2></a>
            </div>
            <div className="search-input">
              <input className="search-bar" type="text" placeholder="Search Recipe..." value={search} onChange={updateSearch} />
              <button className="search-button" type="submit">Search</button>
            </div>
        </form>
        <div className="heading">
          <h2>Instant nutritional analysis of any recipe or ingredient list!</h2>
          <p>Analyze any recipe or ingredient list
  Automatic tagging for allergens and popular diets
  Database of close to 900,000 food items. 2.3+ million nutritionally analyzed recipes
  Detailed macro and micronutrient data
  Filter by calories, diets and allergens</p>
        </div>
        <div className="recipes">
          {recipes.map(recipe =>(
            <Recipe 
            // MAPPING THROUGH THE API RESULT
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            cuisinType={recipe.recipe.cuisinType}
            dishType={recipe.recipe.dishType}
            mealType={recipe.recipe.mealType}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default App;
