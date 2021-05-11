import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import bobross from "../../images/bobross.jpg"
import bobross2 from "../../images/bobross-2.jpg"

export default function timelessWisdom() {
  return (
    <ProjectDisplay
      topImg={bobross}
      topImgAlt="Screenshot of Bob Ross Timeless Wisdom website. The quote shown says 'There's nothing wrong with having a tree as a friend'"
      title="Bob Ross Timeless Wisdom"
      desc="As an homage to some of Bob Ross' greatest advice, and to practice
            some very basic JS concepts, I created a Bob Ross Quote Generator
            that displays different nuggets of wisdom on refresh."
      bottomImg={bobross2}
      BottomImgAlt="Screenshot of Bob Ross Timeless Wisdom website. The quote shown says 'We don't make mistakes. We have happy accidents.'"
      linkURL="https://agneskalstrom.github.io/bob-ross-timeless-wisdom/"
      linkText="See demo"
    />
  )
}
