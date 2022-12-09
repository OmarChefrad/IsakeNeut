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
      pages={4}
      className="flex flex-col items-center pl-2 ml:pl-96">
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={1}
        style={{
          backgroundSize: "cover",
        }}>
        <Image
          src="https://cdn.discordapp.com/attachments/961369644130766853/1050554444116406333/art12.jpeg"
          alt="cover"
          width={1080}
          height={1350}
          style={{ backgroundSize: "cover" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        factor={1}
        style={{
          backgroundSize: "cover",
        }}>
        <h2>ONE NUET</h2>
        <Image
          src="https://cdn.discordapp.com/attachments/961369644130766853/1050551981414023188/art_3.jpg"
          alt="cover"
          width={1350}
          height={1350}
          style={{ backgroundSize: "cover" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        factor={1}
        style={{
          backgroundSize: "cover",
        }}>
        <h2>Wete</h2>
        <Image
          src="https://cdn.discordapp.com/attachments/961369644130766853/1050552012879700119/art_10.jpg"
          alt="cover"
          width={1080}
          height={1350}
          style={{ backgroundSize: "cover" }}
        />
      </ParallaxLayer>
    </Parallax>
  )
}

export default Parallaxs
