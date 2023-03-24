function RecipeForm() {
  return (
    <form className="App">
      <h1>Add Recipe</h1>
      <p style={{ marginTop: "30px" }}></p>
      <h1>
        <marquee behavior="" direction="right">
          🌽🥦🍓🥬️🍊🍇
        </marquee>
      </h1>
      {/* title */}
      <div>
        <label>Title </label>
        <input type="text" id="title" />
      </div>
      {/* introduction */}
      <div>
        <label>Introduction </label>
        <textarea />
      </div>
      {/* chapter Titles */}
      <div>
        <label>Chapter Titles </label>
        <textarea />
      </div>
      {/* recipies Titles */}
      <div>
        <label>Recipe Titles </label>
        <textarea />
      </div>
      {/* Closing Titles */}
      <div>
        <label>Closing Titles </label>
        <textarea />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
