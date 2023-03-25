import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [getTitle, setTitle] = useState(null);
  const [getIntro, setIntro] = useState(null);
  const [gptData, setData] = useState(null);
  const [openBook, setOpenBook] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!getIntro || !getTitle) {
      return alert("Please Fill Form Completely");
    }
    setOpenBook(false);
    const data = {
      prompt: `Create an outline of the book in British Tone English. My book title is ${getTitle}. Please briefly introduce ${getIntro} in up to 180-200 words, write chapter titles, and write me the recipes for ${getIntro}. The measurements will be in the Metric system (grams, celsius), and cups/teaspoons in brackets. Write closing titles (up to 3), Write my index Index, and Write my Glossary as well`,
    };
    const response = await axios
      .post("http://localhost:5000/chatgpt", data)
      .catch((err) => {
        console.log(err);
      });

    if (response.status === 200) {
      setData(response.data.message);
    } else {
      return alert("something went wrong");
    }
  };

  const Refresh = () => {
    window.location.reload(true);
  };
  return (
    <div>
      {openBook ? (
        <form className="App">
          {/* form */}
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
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
            />
          </div>
          {/* introduction */}
          <div>
            <label>Introduction </label>
            <textarea onChange={(e) => setIntro(e.target.value)} rows={3} />
          </div>
          {/* button */}
          <div style={imageStyle}>
            <button
              onClick={handleSubmit}
              className="btn-neon"
              value="Add Recipe"
            />
          </div>
        </form>
      ) : (
        <div className="AppTwo">
          <h1 style={{ textTransform: "capitalize" }}>
            {getTitle ? getTitle : ""} Book 🥘
          </h1>
          <div style={imageStyle}>
            <img
              src="https://ballychohanrecipeblog.files.wordpress.com/2016/09/free-healthy-recipes-bally-chohan-recipe.gif"
              alt=""
            />
          </div>
          {gptData ? (
            <div>
              <div style={{ whiteSpace: "pre-wrap" }}>{gptData}</div>
              <div style={imageStyle}>
                <button
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                  onClick={Refresh}
                  className="btn-neon"
                  value="Make Another Recipe ?"
                />
              </div>
            </div>
          ) : (
            <div style={imageStyle}>
              <div
                style={{ marginTop: "30px", marginBottom: "30px" }}
                className="loader"
              ></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export const imageStyle = {
  display: "flex",
  justifyContent: "center",
};
{
  /* <h2>Introduction</h2>
<h3>Pizza Recipes</h3>

<h3>Index</h3>
<h3>Glossary</h3> */
}
