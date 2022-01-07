import React from "react"
import ProjectIntro from "../../components/projectIntro"
import recipe from "../../images/recipe-app.jpg"
import recipe2 from "../../images/recipe-app-2.svg"


export default function Digisera() {
  return (
    <>
      <ProjectIntro
        title="Recipe app"
        case="Designing and building a recipe app for personal use."
        role="Designer and developer."
        problem="My partner and I often feel uninspired when it comes to cooking, but the fact that we have different dietary requirements makes it difficult for us to use most recipe apps available on the market."
        approach="The app's main purpose is to provide assistance when inspiration is running low, and so a randomized recipe is instantly presented instead of the user having to search for certain dishes or ingredients – since deciding what to search for can feel like as much of an effort as deciding what to eat."
        solution="A super basic app with a list of ingredients, instructions and a button to generate a new recipe."
        tools="Figma, React, Netlify"
        linkPrefix="Prototype:"
        linkURL="https://www.figma.com/proto/RadYZoOdFDUhJHoknykgz3/Untitled?page-id=0%3A1&node-id=1%3A2&viewport=296%2C48%2C0.34&scaling=scale-down&starting-point-node-id=1%3A2&hide-ui=1"
        linkText="Click here"
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
