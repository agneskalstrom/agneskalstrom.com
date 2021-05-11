import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import emojiaquarium from "../../images/emojiaquarium.jpg"
import emojiaquarium2 from "../../images/emojiaquarium-2.jpg"

export default function emojiAquarium() {
  return (
    <ProjectDisplay
      topImg={emojiaquarium}
      topImgAlt="Screenshot of Emoji Aquarium."
      title="Emoji Aquarium"
      desc="A virtual aquarium with emoji sea creatures, made with vanilla JS and Canvas."
      bottomImg={emojiaquarium2}
      bottomImgAlt="Screenshot of Emoji Aquarium."
      linkURL="https://agneskalstrom.com/emoji-aquarium/"
      linkText="See demo"
    />
  )
}
