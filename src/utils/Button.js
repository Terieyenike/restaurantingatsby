import styled from "styled-components"
import { styles } from "../utils"

const BannerButton = styled.button`
  background: transparent;
  color: ${styles.colors.mainWhite};
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  ${styles.letterSpacing({ spacing: ".5rem" })};
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  }
`

export { BannerButton, SectionButton }
