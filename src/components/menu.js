import React from "react"
import Link from "gatsby-link"

export default function Menu() {
    return (
        <nav className="burger-menu">
        <ul className="burger-list">
          <li className="burger-menu-item">
            <Link to="/about/">About</Link>
          </li>
          <li className="burger-menu-item">
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    )
}