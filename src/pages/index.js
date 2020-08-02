import React from "react"
import { HomeHeader } from "../utils/Header"
import img from "../images/bcg/homeBcg.jpeg"

// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>hello from header</HomeHeader>
  </Layout>
)

export default IndexPage
