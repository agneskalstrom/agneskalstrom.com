import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import magazine from "../../images/magazine.jpg"
import magazine2 from "../../images/magazine-2.jpg"

export default function fictionalMagazine() {
  return (
    <ProjectDisplay
      topImg={magazine}
      title="Fictional magazine spread"
      desc="As the final assignment for my digital graphics course, I created
            this fictional magazine spread using my reluctant partner, a mobile
            camera and Adobe InDesign."
      bottomImg={magazine2}
    />
  )
}
