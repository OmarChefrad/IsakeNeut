import React from "react"
import { SocialIcon } from "react-social-icons"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center pt-3">
      <div className="acrylic">
        <div className="flex flex-row items-start">
          <SocialIcon
            url="https://www.instagram.com/in/isake-neut-0b0b1b1b9/"
            fgColor="white"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <SocialIcon
            url="https://www.soundcloud.com/in/isake-neut-0b0b1b1b9/"
            fgColor="white"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <SocialIcon
            url="https://www.whatsapp.com/in/isake-neut-0b0b1b1b9/"
            fgColor="white"
            bgColor="transparent"
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            fgColor="white"
            bgColor="transparent"
            network="email"
            className="cursor-pointer"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-white font-bold">GET IN TOUCH</p>
        </div>
      </div>
    </header>
  )
}

export default Header
