import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import gifmuseum from "../../images/gifmuseum.jpg"
import gifmuseum2 from "../../images/gifmuseum-2.jpg"

export default function gifMuseum() {
  return (
    <ProjectDisplay
      topImg={gifmuseum}
      topImgAlt="Screenshot of Museum of GIFs website and the Art History exhibition."
      title="Museum of GIFs"
      desc="A React app using the Giphy API + Free Dictionary API to generate
            GIF paintings and dynamic exhibition information."
      bottomImg={gifmuseum2}
      bottomImgAlt="Screenshot of Museum of GIFs website showing the Art Deco exhibition with the sidebar open displaying exhibition information, opening hours and credits."
      linkURL="https://gif-museum.netlify.app"
      linkText="See demo"
    />
  )
}
