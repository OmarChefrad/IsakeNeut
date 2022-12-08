import React from "react"
import { SocialIcon } from "react-social-icons"

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div className="acrylic">
        <SocialIcon
          url="https://www.instagram.com/in/isake-neut-0b0b1b1b9/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.whatsapp.com/in/isake-neut-0b0b1b1b9/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/isake-neut-0b0b1b1b9/"
          fgColor="white"
          bgColor="transparent"
        />
      </div>
    </header>
  )
}

export default Header
