import React, { useState } from "react"
import Link from "gatsby-link"
import logo from "../images/logo.svg"
import burger from "../images/hamburger.svg"
import close from "../images/close.svg"

export default function Header() {
  const [open, setOpen] = useState(false)

  function toggleMenu() {
    setOpen(!open)
  }

  function closeMenu() {
    setOpen(false)
  }

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/" onClick={closeMenu} onKeyDown={closeMenu} role="button">
            <img src={logo} alt="Agnes Kalström logo" aria-label="Go to start page" />
          </Link>
        </div>
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/about/">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="hamburger">
          <div onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabindex="0">
            {!open ? (
              <img src={burger} aria-label="Open hamburger menu" />
            ) : (
              <img src={close} aria-label="Close hamburger menu" />
            )}
          </div>
        </nav>
      </header>
      <aside>
        {!open ? null : (
          <nav className="burger-menu">
            <ul className="burger-list">
              <li className="menu-item">
                <Link to="/about/" onClick={closeMenu} onKeyDown={closeMenu}>About</Link>
              </li>
              <li className="menu-item">
                <Link to="/contact/" onClick={closeMenu} onKeyDown={closeMenu}>Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </aside>
    </>
  )
}
