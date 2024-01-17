import React, {useState,useEffect} from "react";
import './App.css';
import axios from 'axios';
import Recipe from './Recipe'



function App() {
  
  const APP_ID = "c51e3efa";
  const APP_KEY = "	2515ed5d53b99ee7c57c93fac4b04961";
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("chicken")
  useEffect(() => {
      axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
        ).then(response => setRecipe(response.data.hits))
    
  }, [search]);

  

  const findRecipe = (event) => {
    event.preventDefault()
    setSearch(query)
    // console.log(query)
  }

  
  
  
  return (
    <>

      
      <div className="search-container">
      <form onSubmit={findRecipe} >
          <input value={query} type='text' onChange={event => setQuery(event.target.value)}/> 
          <button className="search-button">Submit</button>
        </form>
      </div>

      <div className="cards-container">
        {
          recipe.length === 0 ? "OOPS THERE IS NO MATCH FOUND" :
      
          recipe.map((data, index) => (
            <Recipe
              key={index}
             title= {data.recipe.label}
             calories={data.recipe.calories}
             image={data.recipe.image}
             ingredients={data.recipe.ingredients}
              />
          ))
        }
      </div>      

     </> 
  )
}

export default App;
