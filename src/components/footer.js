import React from "react"
import Link from "gatsby-link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

let year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="wrapper">
    <div className="footer-left">
    </div>
    <div className="footer-center">
      <p>© {year} Agnes Kalström</p>
    </div>
    <div className="footer-right">
      <Link to="https://github.com/agneskalstrom/agneskalstrom.com">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </div>
    </footer>
  )
}
