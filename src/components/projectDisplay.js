import React from "react"

export default function ProjectDisplay(props) {
  return (
    <main className="wrapper">
      <section className="top-container">
        <div className="top-img">
          <img src={props.topImg} alt={props.topImgAlt} />
        </div>
        <section className="top-right">
          <div className="top-right-info">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <p>
              <a href={props.linkURL}>{props.linkText}</a>
            </p>
          </div>
        </section>
      </section>
      <section className="bottom-img">
        <img src={props.bottomImg} alt={props.bottomImgAlt} />
      </section>
    </main>
  )
}
