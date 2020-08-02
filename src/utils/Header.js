import React from "react"
import styled from "styled-components"
import img from "../images/bcg/homeBcg.jpeg"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 58.78px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center center / cover fixed no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

HomeHeader.defaultProps = {
  img,
}

export { HomeHeader }
