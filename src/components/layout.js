import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Cursor from "./cursor"
import "../styles/reset.css"
import "../styles/index.css"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Agnes Kalström</title>
        <link rel="canonical" href="http://agneskalstrom.com" />
      </Helmet>
      <Cursor />
      <Header />
      {children}
    </>
  )
}
