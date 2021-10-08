import React from "react"
import ProjectIntro from "../../components/projectIntro"
import digisera from "../../images/digisera.jpg"
import digisera2 from "../../images/digisera-2.jpg"
import digisera3 from "../../images/digisera-3.svg"
import digisera4 from "../../images/digisera-4.svg"

export default function Digisera() {
  return (
    <>
      <ProjectIntro
        title="Digisera"
        desc="Rebranding, visual identity and website design and development for Stockholm-based web agency Digisera. The aim was to create a warm and welcoming profile with a digital feel. "
        linkPrefix="Website:"
        linkText="Click here"
        linkURL="https://digisera.se"
        detail1="Figma"
        detail2="Illustrator"
        detail3="InDesign"
        detail4="Photoshop"
        detail5="WordPress"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={digisera} />
          <img src={digisera2} />
        </div>
        <div className="two-section">
          <img src={digisera3} />
          <img src={digisera4} />
        </div>
      </section>
    </>
  )
}
