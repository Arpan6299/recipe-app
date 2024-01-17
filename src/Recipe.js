import React from "react";

const Recipe = (props) => {
   const {title,calories,image,ingredients} = props
   console.log(props)
 return <div className="recipe-card-container" >

    <p className="cards-title">{props.title}</p>
    <p className="cards-calories">{props.calories}</p>
    <img src={image} alt="" className="cards-image"/>
    <ol>
      {ingredients.map((ingredients) => (
         <li>{ingredients.text}</li>
      ))}
    </ol>
 </div>;
};

export default Recipe;