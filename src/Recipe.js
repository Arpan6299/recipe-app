import React from "react";

const Recipe = (props) => {
   const {title,calories,image,ingredients} = props
   console.log(props)
 return <div className="recipe-card-container" >

    <p className="cards-title">{title}</p>
    <p className="cards-calories">{calories}</p>
    <img src={image} alt="" className="cards-image"/>
    <ol className="cards-ingredients">
      {ingredients.map((ingredients)  => (
         <li>{ingredients.text}</li>
      ))}
    </ol>
 </div>;
};

export default Recipe;