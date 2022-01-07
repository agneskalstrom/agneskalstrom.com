import React from "react"
import ProjectIntro from "../../components/projectIntro"
import bobross from "../../images/bobross.jpg"
import bobross2 from "../../images/bobrossgif.gif"

export default function timelessWisdom() {
  return (
    <>
      <ProjectIntro
        title="Bob Ross Timeless Wisdom"
        desc="A Bob Ross quote generator that displays different nuggets of wisdom on refresh."
        linkPrefix="Website:"
        linkText="Click here"
        linkURL="https://agneskalstrom.github.io/bob-ross-timeless-wisdom/"
        specs="Vanilla JS"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={bobross} alt="Bob Ross Timeless Wisdom website" />
          <img src={bobross2} alt="GIF showing different quotes from the website" />
        </div>
      </section>
    </>
  )
}