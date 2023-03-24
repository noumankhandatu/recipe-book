import { useState } from "react";
import "./App.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="App">
      <h1>My Recipe Book 🥘 </h1>
      <p style={{ marginTop: "30px" }}></p>
      <h1>
        <marquee behavior="" direction="">
          🌽🥦🍓🥬️🍊🍇
        </marquee>
      </h1>
      <h2>Introduction</h2>
      <RecipeForm onAddRecipe={handleAddRecipe} />
      <h3>Pizza Recipes</h3>
      <RecipeList recipes={recipes} />
      <h3>Index</h3>
      <h3>Glossary</h3>
    </div>
  );
}

function RecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddRecipe({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Recipe</h3>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.title}>
          <h4>{recipe.title}</h4>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
}
