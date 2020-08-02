import React from "react"
import { HomeHeader, Banner } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"

// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - Maryland, LAG" />
    </HomeHeader>
  </Layout>
)

export default IndexPage
