import React from "react"
// import { Link } from "gatsby"
import { PageHeader, Banner } from "../utils"
import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={aboutImg}>
      <Banner title="about us" subtitle="a little about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
