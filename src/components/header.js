import React, { useState } from "react"
import Link from "gatsby-link"
import logo from "../images/assets/logo.svg"
import burger from "../images/assets/hamburger.svg"
import close from "../images/assets/close.svg"

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
      <header className="wrapper">
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
              <Link to="/work/">Work</Link>
            </li>
          </ul>
        </nav>
        <nav className="hamburger">
          <div onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex="0">
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
                <Link to="/work/" onClick={closeMenu} onKeyDown={closeMenu}>Work</Link>
              </li>
            </ul>
          </nav>
        )}
      </aside>
    </>
  )
}
