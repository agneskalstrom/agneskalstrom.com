import React from "react"
import ProjectIntro from "../../components/projectIntro"
import pomodoro from "../../images/pomodoro.jpg"
import pomodorogif from "../../images/pomodorogif.gif"

export default function pomodoroTimer() {
  return (
    <>
      <ProjectIntro
        title="Pomodoro Timer"
        desc="A timer app based on the pomodoro technique that automatically switches between focus and break mode."
        linkPrefix="App:"
        linkText="Click here"
        linkURL="https://pomodoro-focus-timer.netlify.app/"
        specs="Progressive Web App, React, Netlify"
      />
      <section className="project-images wrapper">
        <div className="two-section">
          <img src={pomodoro} alt="Pomodoro timer app" />
          <img src={pomodorogif} alt="GIF showing the app switching between focus and break mode" />
        </div>
      </section>
    </>
  )
}
