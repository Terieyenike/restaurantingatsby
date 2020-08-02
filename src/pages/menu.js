import React from "react"
// import { Link } from "gatsby"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader img={menuImg}>
      <Banner title="our menu" subtitle="Delicious meals everyday!" />
    </PageHeader>
  </Layout>
)

export default MenuPage
