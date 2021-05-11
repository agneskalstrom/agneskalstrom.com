import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import dateplanner from "../../images/dateplanner.jpg"
import dateplanner2 from "../../images/dateplanner-2.jpg"

export default function datePlanner() {
  return (
    <ProjectDisplay
      topImg={dateplanner}
      topImgAlt="Screenshot of search section of Date Planner website."
      title="Date Planner"
      desc="A group project where the task was to use an API. We chose to build
            an event planner based on the user's budget using the Ticketmaster
            API. My role was mainly focused on creating and implementing the design and styling."
      bottomImg={dateplanner2}
      bottomImgAlt="Screenshots of search section and result section."
      linkURL="https://date-planner.netlify.app/"
      linkText="See demo"
    />
  )
}
