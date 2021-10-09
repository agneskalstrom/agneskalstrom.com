import React from "react"
import ProjectIntro from "../../components/projectIntro"
import creativechase from "../../images/creativechase.jpg"
import creativechase2 from "../../images/creativechase-2.jpg"
import creativechaselogo from "../../images/creativechase-logo.svg"

export default function creativeChase () {
  return (
    <>
      <ProjectIntro
        title="Creative Chase"
        desc="Design for a classmate's business idea for a business shop, created during a 36 hour sprint."
        detail1="Figma"
        detail2="Illustrator"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={creativechase} alt="Creative Chase website" />
          <div className="display">
            <img src={creativechaselogo} className="creative-chase-logo" alt="Creative Chase logo" />
          </div>
        </div>
        <div className="long-section">
          <img src={creativechase2} alt ="Full Creative Chase website" />
        </div>
      </section>
    </>
  )
}
