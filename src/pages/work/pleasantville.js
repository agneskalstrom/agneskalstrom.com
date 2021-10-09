import React from "react"
import ProjectIntro from "../../components/projectIntro"
import pleasantville1 from "../../images/pleasantville.jpg"
import pleasantville2 from "../../images/pleasantville-2.jpg"
import pleasantville3 from "../../images/pleasantville-3.jpg"
import pleasantville4 from "../../images/pleasantville-4.jpg"


export default function pleasantville() {
  return (
    <>
      <ProjectIntro
        title="Level 2: The Dream"
        desc="Whilst looking for the mysterious Alex in a bizarre town called Pleasantville, the main character finds themselves in a state between being awake and dreaming, and has to find a set of clues to solve the riddle and proceed on their quest. This level is part of a bigger world which, in turn, is part of the game Esacpe from Hyper Island, developed by students of the front-end development program at Hyper Island."
        linkPrefix="Play game:"
        linkText="Click here"
        linkURL="https://agneskalstrom.github.io/level-2-the-dream/"
        detail1="A-Frame"
        detail2="InDesign"
        detail3="Photoshop"
        detail4="Poly"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={pleasantville1} />
          <img src={pleasantville2} />
        </div>
        <div className="one-section-wide">
            <img src={pleasantville3} />
        </div>
        <div className="one-section-wide">
            <img src={pleasantville4} />
        </div>
      </section>
    </>
  )
}

