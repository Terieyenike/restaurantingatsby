import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://instagram.com",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://facebook.com",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://twitter.com",
      },
    ],
  }
  render() {
    const { icons } = this.state
    return (
      <IconsWrapper>
        {icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.icon}
            </a>
          )
        })}
      </IconsWrapper>
    )
  }
}

const IconsWrapper = styled.div`
  .icon {
    cursor: pointer;
    font-size: 1.2rem;
    ${styles.transFunction()};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 10rem;
  }
`
