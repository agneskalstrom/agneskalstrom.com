import React from "react"
import ProjectIntro from "../../components/projectIntro"
import gifmuseum from "../../images/gifmuseum.jpg"
import gifmuseumgif from "../../images/gifmuseumgif.gif"


export default function gifMuseum() {
  return (
    <>
      <ProjectIntro
        title="Museum of GIFs"
        desc="An online museum experience with GIF paintings and dynamic exhibition information."
        linkPrefix="Website:"
        linkText="Click here"
        linkURL="https://gif-museum.netlify.app/"
        detail1="React"
        detail2="Giphy API"
        detail3="Free Dictionary API"
        detail4="Netlify"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={gifmuseum} alt="Museum of GIFs website" />
          <img src={gifmuseumgif} alt="GIF of Girl with Pearl Earring rolling her eyes" />
        </div>
      </section>
    </>
  )
}

