import React from "react"
// import { Link } from "gatsby"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={contactImg}>
      <Banner title="contact us" subtitle={`let's get in touch`} />
    </PageHeader>
  </Layout>
)

export default ContactPage
