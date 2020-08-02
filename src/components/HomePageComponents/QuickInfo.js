import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import { styles } from "../../utils"
import { Link } from "gatsby"
import styled from "styled-components"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            commodi fuga numquam nostrum eum minus nemo quod, praesentium odit
            voluptates incidunt, neque mollitia! Accusantium pariatur eligendi
            consequuntur perferendis quisquam odit?
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2em auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`
