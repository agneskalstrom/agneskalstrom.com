import React from "react"
import Link from "gatsby-link"
import github from "../images/assets/github.svg"

let year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="wrapper">
      <div className="footer-left"></div>
      <div className="footer-center">
        <p>© {year} Agnes Kalström</p>
      </div>
      <div className="footer-right">
        <Link to="https://github.com/agneskalstrom/agneskalstrom.com">
          <img src={github} aria-label="Go to GitHub repository" />
        </Link>
      </div>
    </footer>
  )
}
