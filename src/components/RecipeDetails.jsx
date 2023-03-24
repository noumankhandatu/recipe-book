function RecipeDetails() {
  return (
    <div className="App">
      <h1>Title Book 🥘</h1>
      <div style={imageStyle}>
        <img
          src="https://ballychohanrecipeblog.files.wordpress.com/2016/09/free-healthy-recipes-bally-chohan-recipe.gif"
          alt=""
        />
      </div>
      <h2>Introduction</h2>
      <h3>Pizza Recipes</h3>

      <h3>Index</h3>
      <h3>Glossary</h3>
    </div>
  );
}

export default RecipeDetails;

const imageStyle = {
  display: "flex",
  justifyContent: "center",
};
