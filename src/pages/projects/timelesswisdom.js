import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import bobross from "../../images/bobross.jpg"
import bobross2 from "../../images/bobross-2.jpg"

export default function timelessWisdom() {
  return (
    <ProjectDisplay
      topImg={bobross}
      title="Bob Ross Timeless Wisdom"
      desc="As an homage to some of Bob Ross' greatest advice, and to practice
            some very basic JS concepts, I created a Bob Ross Quote Generator
            that displays different nuggets of wisdom on refresh."
      bottomImg={bobross2}
      linkURL="https://agneskalstrom.github.io/bob-ross-timeless-wisdom/"
      linkText="See demo"
    />
  )
}
