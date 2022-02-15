import React from "react"
import ProjectIntro from "../../components/projectIntro"
import recipe from "../../images/recipe-app.jpg"
import recipe2 from "../../images/recipe-app-2.svg"


export default function RecipeApp() {
  return (
    <>
      <ProjectIntro
        title="Vad ska vi äta?"
        case="Designing and building a recipe app for personal use."
        role="Designer and developer."
        problem="My partner and I often feel uninspired when it comes to cooking, but the fact we have different dietary requirements makes it difficult for us to use most recipe apps currently available on the market."
        approach="As the app's main purpose is to provide quick assistance when inspiration is running low, a randomized recipe is instantly presented instead of the user having to search for certain dishes or ingredients – since deciding what to search for can feel like as much of an effort as deciding what to eat."
        solution="A basic app with a list of ingredients, instructions and a button to generate a new recipe."
        tools="Figma, React, PWA, Netlify"
        linkPrefix="App:"
        linkURL="https://vadskaviata.netlify.app/"
        linkText="https://vadskaviata.netlify.app/"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={recipe} alt="Recipe app" />
          <img src={recipe2} alt="Colors with hex codes" />
        </div>
      </section>
    </>
  )
}
