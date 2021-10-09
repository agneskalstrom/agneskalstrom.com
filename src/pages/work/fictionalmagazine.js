import React from "react"
import ProjectIntro from "../../components/projectIntro"
import magazine from "../../images/magazine.jpg"
import magazine2 from "../../images/magazine-2.jpg"

export default function fictionalMagazine() {
  return (
    <>
      <ProjectIntro
        title="Magazine spread"
        desc="A fictional magazine spread featuring Alexander Lundvall and his illustrations."
        detail2="InDesign"
        detail3="Photoshop"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={magazine} alt="Mockup of magazine spread" />
          <img src={magazine2} alt="Mockup of magazine spread" />
        </div>
      </section>
    </>
  )
}