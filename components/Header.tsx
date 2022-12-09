import Image from "next/image"
import React from "react"
import { SocialIcon } from "react-social-icons"

type Props = {}

const Header = (props: any) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center pt-3">
      <div className="acrylic">
        <div className="flex flex-row items-start">
          <SocialIcon
            url="https://www.instagram.com/__buket_pink_/?hl=fr"
            fgColor="white"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <SocialIcon
            url="https://soundcloud.com/buketpink/sets/paranoia-agent?si=2d557700c2fb4629a00d5360f2d64658&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            fgColor="white"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <SocialIcon
            url="https://www.youtube.com/"
            fgColor="white"
            bgColor="transparent"
            className="cursor-pointer "
          />
        </div>
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <p className="uppercase inline-flex text-lg text-white font-bold tracking-[1px] mr-2">ISAKE NEUT</p>
          <Image
            src="https://cdn.discordapp.com/attachments/961369644130766853/1050818644738846881/heart.png"
            alt="heart"
            width={35}
            height={35}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
