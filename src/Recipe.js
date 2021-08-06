import React from 'react';
// IMPORTING THE RECIPE STYLING FROM CSS MODULE
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, cuisinType, dishType, mealType}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="recipe" />
            <p className="type"><span>Cuisin Type: </span>{cuisinType}</p>
            <p className="type"><span>Dish Type: </span>{dishType}</p>
            <p className="type"><span>Meal type: </span>{mealType}</p>
            <h4>INGREDIENTS</h4>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p className="type"><span>No Of Calories: </span>{calories}</p>
        </div>
    )
}

export default Recipe;