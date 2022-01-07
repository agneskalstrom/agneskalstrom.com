import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import Cursor from "./cursor"
import "../styles/reset.css"
import "../styles/index.css"

export default function Layout({ children }) {
  return (
    <>
      <Helmet htmlAttributes={{lang: 'en',}}>
        <title>Agnes Kalström</title>
        <link rel="canonical" href="https://agneskalstrom.com" />
        <meta name="description" content="Agnes Kalström, web developer and designer based in Stockholm, Sweden." />
      </Helmet>
      <Cursor />
      <Header />
      {children}
      <Footer />
    </>
  )
}
