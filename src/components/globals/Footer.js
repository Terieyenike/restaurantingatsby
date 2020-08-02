import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://instagram.com/",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://facebook.com/",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://twitter.com/",
      },
    ],
  }
  render() {
    const { icons } = this.state
    return (
      <FooterWrapper>
        <div className="title">Eatery</div>
        <div className="icons">
          {icons.map(item => {
            return (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
        <p className="copyright">copyright &copy; 2020 eatery</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.5rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    width: 10rem;
    margin: 0 auto 2rem;
    padding: 0 auto 2rem;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
`
