import React from "react"
import ProjectIntro from "../../components/projectIntro"
import creativechase from "../../images/creativechase.svg"
import creativechase2 from "../../images/creativechase-2.jpg"

export default function creativeChase () {
  return (
    <>
      <ProjectIntro
        title="Creative Chase"
        case="Creating a website design for a classmate's business in 36 hours."
        role="Designer."
        problem="The instructions for this brief was to not share any visual inspiration or guidelines during the design phase. How do you ensure you're creating the right thing when you don't know what you're creating (and have a very limited amount of time to create it)?"
        approach="As we had to rely only on verbal communication for understanding what we were supposed to create, it was critical to ask as many questions as possible regarding the look and feel of the website in the beginning of the project. Since we weren't allowed to ask for feedback from each other, I made sure to user test my design with other people."
        solution="Based on the information I'd gathered regarding the company idea and feeling of the website, I came up with a design that aligned with my classmate's vision but also focused on what I would like my experience to be as a potential customer."
        tools="Figma, Illustrator"
        linkPrefix="Figma prototype:"
        linkURL="https://www.figma.com/proto/7fVnFEQnRgl2gWt2bAgMAM/Untitled?page-id=0%3A1&node-id=2%3A2&viewport=296%2C48%2C0.58&scaling=min-zoom&starting-point-node-id=2%3A2&hide-ui=1"
        linkText="Click here"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={creativechase} alt="Creative Chase logo" />
          <img src={creativechase2} alt="Creative Chase website" />
        </div>
      </section>
    </>
  )
}
