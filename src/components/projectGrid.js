import React from "react"
import Box from "./box"
import allProjects from "./projectList"
import Slider from "react-slick";
import {NextArrow, PrevArrow} from "./sliderArrows";
import arrow from "../images/svg/down-arrow.svg";

export default function ProjectGrid() {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  };
  return (
    <>
      <section className="projects-grid" id="work">
      <div className="work-link">
            <p className="large-link">
              <span className="bold-text">Recent work</span>{" "}
              <span className="down-arrow">
                <img src={arrow} alt="Arrow pointing down" />
              </span>
            </p>
          </div>
        <Slider {...settings}>
          {allProjects.map(project => {
            return (
              <Box
                key={project.id}
                image={project.img}
                title={project.title}
                alt={project.alt}
                link={project.link}
              />
            )
          })}
          </Slider>
      </section>
    </>
  )
}
