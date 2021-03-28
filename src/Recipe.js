import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,images, ingredients}) => {
	return (
		<div className={style.recipeItem}>
			<div className={style.recipeHeader}>
				<img src={images} alt="" className={style.recipeImage} />
				<h3 className={style.recipeTitle}>{title}</h3>
			</div>
			<ul className={style.ingredientList}>
				<li>Ingredients: </li>
				{ingredients.map(ingredient => (
					<li>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
}

export default Recipe;