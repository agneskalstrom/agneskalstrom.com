import React from "react"
import ProjectIntro from "../../components/projectIntro"
import emojiaquarium from "../../images/emojiaquarium.jpg"

export default function emojiAquarium() {
  return (
    <>
      <ProjectIntro
        title="Emoji Aquarium"
        desc="A virtual aquarium with emoji sea creatures."
        linkPrefix="Website:"
        linkText="Click here"
        linkURL="https://agneskalstrom.github.io/emoji-aquarium/"
        detail1="Vanilla JS"
        detail2="Canvas"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={emojiaquarium} />
          <div className="display emoji">
            <p className="large-emoji">🐟</p>
            <p className="small-emoji">🐠</p>
          </div>
        </div>
      </section>
    </>
  )
}

