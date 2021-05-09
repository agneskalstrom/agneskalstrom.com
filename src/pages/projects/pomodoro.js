import React from "react"
import ProjectDisplay from "../../components/projectDisplay"
import pomodoro from "../../images/pomodoro.jpg"
import pomodoro2 from "../../images/pomodoro-2.jpg"

export default function PomodoroTimer() {
  return (
    <ProjectDisplay
      topImg={pomodoro}
      title="Pomodoro Timer"
      desc="A timer app based on the Pomodoro Technique. The app was
            created using React and later converted into a Progressive Web App
            which can be downloaded to both desktop and mobile."
      bottomImg={pomodoro2}
      linkURL="https://pomodoro-focus-timer.netlify.app/"
      linkText="See demo"
    />
  )
}
