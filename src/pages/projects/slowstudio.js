import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import slowstudio from "../../images/slowstudio.jpg"
import slowstudio2 from "../../images/slowstudio-2.jpg"

export default function slowStudio() {
  return (
    <ProjectDisplay
      topImg={slowstudio}
      topImgAlt="Screenshot of the top section/start page of Slow Studio website."
      title="Slow Studio"
      desc="For the newly founded interior design company Slow Studio, we were
            asked to create both a visual identity as well as a website with a
            web shop for selling selected artworks. For this project, my role
            was to create the design in Figma. We later created a custom
            template in Wix to make it as easy as possible for the client to
            maintain the website and art shop going forward."
      bottomImg={slowstudio2}
      bottomImgAlt="Screenshot of entire Slow Studio website."
    />
  )
}
