import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import nasa from "../assets/nasa.jpg"
import isake from "../assets/isake.jpg"
import daa from "../assets/daa.jpg"

type Props = {}

const Mom = (props: Props) => {
  return (
    <Parallax pages={4}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundSize: "cover",
        }}>
        <img
          src="https://raw.githubusercontent.com/OmarChefrad/IsakeNeut/main/assets/123123e.png?token=GHSAT0AAAAAABYVIRIAZ2YKUEL3OM2752I6Y4SKUQA"
          alt="cover"
          style={{ backgroundSize: "cover", width: "96.5%", height: "100%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        factor={2}
        style={{
          backgroundSize: "cover",
        }}>
        <h2>ONE NUET</h2>
        <img
          src="https://raw.githubusercontent.com/OmarChefrad/IsakeNeut/main/assets/isda.png?token=GHSAT0AAAAAABYVIRIAMU6XQYPZZKC77CIWY4SKYOA"
          alt="cover"
          style={{ backgroundSize: "cover", width: "96.5%", height: "100%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1}
        factor={0}
        style={{
          backgroundSize: "cover",
        }}>
        <h2>Wete</h2>
        <img
          src="https://raw.githubusercontent.com/OmarChefrad/IsakeNeut/main/assets/nasa.jpg?token=GHSAT0AAAAAABYVIRIBH6ORZYN3R2UIR3OSY4SKY5Q"
          alt="cover"
          style={{ backgroundSize: "cover", width: "96.5%", height: "100%" }}
        />
      </ParallaxLayer>
    </Parallax>
  )
}

export default Mom
