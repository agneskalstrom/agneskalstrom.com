import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import creativechase from "../../images/creativechase.jpg"
import creativechase2 from "../../images/creativechase-2.jpg"

export default function creativeChase() {
  return (
    <ProjectDisplay
      topImg={creativechase}
      topImgAlt="Screenshot of top section of Creative Chase website."
      title="Creative Chase"
      desc="During a 36 hour design sprint, I designed and coded a website for a
      classmate's business idea for a poster shop."
      bottomImg={creativechase2}
      bottomImgAlt="Screenshot of entire Creative Chase website."
    />
  )
}
