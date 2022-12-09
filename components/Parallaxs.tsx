import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import nasa from "../assets/nasa.jpg"
import isake from "../assets/isake.jpg"
import daa from "../assets/daa.jpg"
import Image from "next/image"

type Props = {}

const Parallaxs = (props: Props) => {
  return (
    <Parallax
      pages={3}
      style={{
        width: "100%",
        height: "100%",
      }}
      className="ml-96 ml:ml-48">
      <ParallaxLayer
        offset={0}
        speed={0.6}
        factor={1}>
        <Image
          src="https://cdn.discordapp.com/attachments/961369644130766853/1050554444116406333/art12.jpeg"
          alt="cover"
          width={750}
          height={750}
          style={{ backgroundSize: "contain", marginLeft: "12rem" }}
        />
        <div className="flex flex-col pt-20 items-center text-zinc-700 w-[750px] bg-white h-[200px] ">
          <h2>Isake</h2>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.3}
        factor={1}>
        <Image
          src="https://cdn.discordapp.com/attachments/961369644130766853/1050551982735241386/art_5.png"
          alt="cover"
          width={750}
          height={750}
          style={{ backgroundSize: "cover" }}
        />
        <div className="flex flex-col pt-20 items-center text-zinc-700 w-[750px] bg-white h-[200px] ">
          <h2>Isake</h2>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1}
        factor={1}>
        <Image
          src="https://cdn.discordapp.com/attachments/961369644130766853/1050552012879700119/art_10.jpg"
          alt="cover"
          width={600}
          height={750}
          style={{ backgroundSize: "cover" }}
        />
        <div className="flex flex-col pt-20 items-center text-zinc-700 w-[750px] bg-white h-[200px] ">
          <h2>Isake</h2>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default Parallaxs
